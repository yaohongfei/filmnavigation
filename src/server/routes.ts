import { RouteConfiguration, Server } from 'hapi';

// interface DirectoryHandlerOptions {
//   path: string
//   index: boolean,
//   listing: boolean
// }

// declare module 'hapi' {
//   interface RouteHandlerPlugins {
//     directory?: DirectoryHandlerOptions;
//   }
// }

const routes: RouteConfiguration[] = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
    }
    },
    config: {
      auth: false
    }
  }
];

export function register(server: Server, options: any, next: (err?: Error) => void): void {
  server.route(routes);
  next();
}

exports.register.attributes = {
  name: 'gdn-router',
  version: '1.0.0',
  multiple: false,
};

