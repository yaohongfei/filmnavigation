import * as Hapi from 'hapi';
import * as Path from 'path';
import * as Config from './lib/config';
import * as Dispatch from './lib/dispatch';
import * as Router from './routes';

 export let server: Hapi.Server;

 export function start() : void{
    // console.log('Server running at: ', server.info.url);
    let initializationPromise :Promise<Error | null>;
    // initializationPromise = init();
    init().then( () => {
        server.start().then( () => {
            if(server.info && server.info){
                server.log('server running succesfully at ' + JSON.stringify(server.info));
                console.log('server running succesfully at ' + JSON.stringify(server.info));
            }
        })
        .catch((error) => {
            server.log('Server could not be started!');
            console.log('Server could not be started!');
            console.error(error);
        })  
    } )
    .catch((error) => {
        server.log('Server could not be started!');
        console.log('Server could not be started!');
        console.error(error);
    });
    
 }

function configureTls(hapiServer: Hapi.Server): any {
    return false;
}

function init() : Promise<Error | null> {
        //读取config文件
        let config : Config.Configuration = Config.loadConfig();

        
        server = new Hapi.Server();

        server.connection({
            compression: true,
            port: config.server.port,
            router: {
              isCaseSensitive: true,
              stripTrailingSlash: false
            },
            routes: {
              cors: true,
              files: {
                relativeTo: Path.join(__dirname, '../app')
              },
              security: true
            },
            tls: configureTls(server)
          });


        server.app.config = config;
        
        server.app.db = require('knex')({
            client: 'mysql',
            connection: {
              host : config.data.host,
              user : config.data.user,
              password : config.data.password,
              database : config.data.database
            }
          });
          
        return server.register([{
            register : require('good') as Hapi.PluginFunction<any>,
            options : {
                ops: {
                    interval: 1000
                },
                reporters: {
                    myConsoleReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ log: '*', response: '*' }]
                    }, {
                        module: 'good-console'
                    }, 'stdout'],
                    myFileReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ ops: '*' }]
                    }, {
                        module: 'good-squeeze', 
                        name: 'SafeJson'
                    }, {
                        module: 'good-file',
                        args: ['./log/system_log']
                    }],
                    myHTTPReporter: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ error: '*' }]
                    }, {
                        module: 'good-http',
                        args: ['http://prod.logs:3000', {
                            wreck: {
                                headers: { 'x-api-key': 12345 }
                            }
                        }]
                    }]
                }
            } as any
        },
        {
            register : Dispatch.register  as Hapi.PluginFunction<any>,
        },
        {
            register: require('inert') as Hapi.PluginFunction<any>
        },
        {
            register: Router.register as Hapi.PluginFunction<any>
        }
        ]);


}