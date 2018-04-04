import * as Hapi from 'hapi';

export abstract class BaseController {

    constructor(private readonly _server: Hapi.Server) {
    }

    protected get server(): Hapi.Server {
        return this._server;
    }

    public static get routes(): Hapi.RouteConfiguration[] {
        return [];
    }
}
