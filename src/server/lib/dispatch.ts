import * as Hapi from 'hapi';

export interface DispatchConfiguration {
    controllers?: string | string[];
    autoLoadPath?: string;
}

export function register(server: Hapi.Server, options: DispatchConfiguration, next: (err?: Error) => void): void {
    let controllers: any[] = [];

    if (options.controllers) {
        if (typeof options.controllers === 'string') {
            let controllerReference: any = options.controllers;
            controllers.push(require(controllerReference).default);
        }
        else if (Array.isArray(options.controllers) && options.controllers.length > 0) {
            options.controllers.forEach((controllerReference: any) => {
                controllers.push(require(controllerReference).default);
            });
        }
    }

    if (controllers.length === 0) {
        const autoLoadPath = options.autoLoadPath || './../controllers/';

        try {
            internals.autoLoadControllers(autoLoadPath, controllers);
        }
        catch (err) {
            return next(err);
        }

        if (controllers.length === 0) {
            next(new Error('At least one controller is required.'));
        }
    }

    for (let controllerName in controllers) {
        try {
            let controller = controllers[controllerName];
            let controllerInstance = new (controller)(server);
            let routes = controller.routes as Hapi.RouteConfiguration[];

            if (Array.isArray(routes) && routes.length > 0) {
                routes.forEach((route) => {
                    if (typeof (route.handler) == 'string') {
                        let methodName = route.handler as string;

                        if (methodName) {
                            route.handler = controllerInstance[methodName];

                            if (route.config) {
                                route.config.bind = controllerInstance;
                            } else {
                                route.config = { bind: controllerInstance };
                            }

                        }
                    }
                    //remove auth method if the connection setting is setted to bypass auth. 
                    //This will avoid "can't find auth strategy" issue.
                    if(server.app && server.app.bypassAuth){
                        route.config = {
                            ...route.config,
                            auth:false,
                        }
                    }
                    server.route(route);
                });
            }
        }
        catch (err) {
            next(err);
        }
    }

    next();
};

let internals = {
    autoLoadControllers: function (source: string, controllers: any[]): void {
        const fs = require('fs');
        const path = require('path');

        let fileNameList : string[] = [];

        fileNameList = fs.readdirSync(path.join(__dirname, source));
        if(fileNameList.length > 0){
            fileNameList.forEach(function (fileName: string) {
                if (path.extname(fileName) === '.js') {
                    let controllerReference = path.join(__dirname, source, fileName);
                    if(require(controllerReference).default)
                    {
                        controllers.push(require(controllerReference).default);
                    }
                  
                }
            });
        }
   
    }
};

exports.register.attributes = {
    name: 'controller-dispatcher',
    version: '1.0.0',
    multiple: false,
};
