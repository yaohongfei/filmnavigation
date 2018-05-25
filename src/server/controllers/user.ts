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
            },
            {
                method : 'GET',
                path : '/user/login/{user}/{password}',
                handler : 'login',
                config : {validate : this.loginValidate }
            }
        ];
    }

    public login(request:Hapi.Request,reply:Hapi.ReplyNoContinue) : void {
        const db = (request.server.app.db as Knex);
        const user : string = request.params['user'];
        const password : string = request.params['password'];
        
        db.select().from('user').where('userName','=',user)
        .where('password','=',password)
        .then(result =>  {
            reply.state('yhf','good',{isSecure:false,isHttpOnly : false,path:'/'});
            reply(result);
        })
        .catch(error => {
            reply(Boom.badImplementation(error))
        })
        
    }

    private static get loginValidate () {
        return {
            params: {
                user : Joi.alternatives().try(Joi.string()),
                password : Joi.alternatives().try(Joi.string())
            }
        };
    }

    public getUserById(request: Hapi.Request, reply: Hapi.ReplyNoContinue): void {
        const db = (request.server.app.db as Knex);
        const userId : string = request.params['id'];
        db.select()
            .from('user')
            .where('userId','=', parseInt(userId))
            .then((result: any) => {
                // reply.state('yhf','good',{isSecure:false,isHttpOnly : false});
                reply(result)})
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
