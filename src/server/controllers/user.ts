import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as Joi from 'joi';
import * as Knex from 'knex';
import { BaseController } from './../lib/base-controller';

export default class UserController extends BaseController {
    public static get routes(): Hapi.RouteConfiguration[] {
        return [
            {
                method: 'GET',
                path: '/user/{id}',
                handler: 'getUserById',
                config: { validate: this.getUserByIdValidate }
            }
        ];
    }

    public getUserById(request: Hapi.Request, reply: Hapi.ReplyNoContinue): void {
        const db = (request.server.app.db as Knex);
        const userId : string = request.params['id'];
        db.select()
            .from('user')
            .where('userId','=', parseInt(userId))
            .then((result: any) => reply(result))
            .catch((err: any) => reply(Boom.badImplementation(err)));
    }

    private static get getUserByIdValidate() {
        return {
            params: {
                id: Joi
                    .alternatives()
                    .try(
                    Joi.number()
                    )
            }
        };
    }
}
