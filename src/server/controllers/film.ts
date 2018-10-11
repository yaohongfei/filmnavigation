import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as Joi from 'joi';
import * as Knex from 'knex';
import { BaseController } from './../lib/base-controller';
import { Film ,HomeFilm ,CombineFilm } from '../model/film.model';

export default class FilmController  extends BaseController{
    public static get routes(): Hapi.RouteConfiguration[] {
        return [
                    {
                        method : 'GET',
                        path: '/film/home',
                        handler: 'getHomeFilm'
                    },
                    {
                        method : 'GET',
                        path: '/film/{id}',
                        handler: 'getFilmInfoById',
                        config : { validate :  this.getFilmInfoByIdValidate }
                    },
                    {
                        method : 'GET',
                        path: '/film/attr',
                        handler: 'getFilmAreaAndType'
                    },
                    {
                        method : 'GET',
                        path : '/film/search/{operate}/{condition}',
                        handler : 'searchFilmByCondition',
                        config : { validate : this.searchFilmByConditionValidate }
                    }
               ];
    }


    private static get searchFilmByConditionValidate () {
        return {
            params : {
                "operate" : Joi.string(),
                "condition" : Joi.string().required()
            }
        }
    }

    public searchFilmByCondition (request : Hapi.Request ,reply : Hapi.ReplyNoContinue) {
        const db = request.server.app.db as Knex;
        let operate = request.params['operate'];
        let condition = request.params['condition'];
        let query = null;
        if ('byArea' === operate) {
            query = db.select().from('film').where('area','=',condition);
        } 
        else if ('byType' === operate) {
            query = db.select().from('film').where('type','=',condition);
        } 
        else {
            query = db.select().from('film').where('name','like',`%${condition}%`);
        }

        query.then( (result : any ) => {
            reply(result);
        } ).catch((error : any) => {
            reply(Boom.badImplementation(error));
        })
    }

    public getFilmAreaAndType (request : Hapi.Request, reply : Hapi.ReplyNoContinue){
        const db = request.server.app.db as Knex;
        let keyList : string[] = ['FILM_TYPE','FILM_AREA'];
        db.select().from('data_dictionary')
        .whereIn('data_key',keyList)
        .then((result : any) => {
            if (result && result.length > 0 ) {
                let areaList : any[] = [];
                let typeList : any[] = [];
                result.forEach( (data : any) => {
                    if ( 'FILM_AREA' === data.data_key ){
                        areaList.push(data);
                    }    
                    else {
                        typeList.push(data);
                    }
                } );
                let returnData : { [ key : string] :
                     any } = {
                    area : areaList,
                    type : typeList
                }
                reply(returnData);
            }
            else {
                reply(null);    
            }
        })
        .catch(error => {
            reply(Boom.badImplementation(error));
        })
    }

    public getHomeFilm(request : Hapi.Request,reply : Hapi.ReplyNoContinue) {
        const db = request.server.app.db as Knex;

        db.select().from('home_film').then(result => {
                let homeFilmList = result;
                return homeFilmList;
        }).then((homeFilmList : HomeFilm[] | null) => {
            if ( homeFilmList && homeFilmList.length > 0 ) {
                let idList : number[] = [];
                homeFilmList.forEach((homeFilm : HomeFilm ) => {
                    idList.push(homeFilm.id); 
                });
                return db.select().from('film').whereIn('id',idList).then((filmList) => {
                    if ( filmList && filmList.length > 0 ) {
                        let combineFilmList : CombineFilm[] = [];
                        filmList.forEach((film : Film) => {
                            let index = homeFilmList.findIndex( data => film.id === data.id );
                            if ( index >= 0 ) {
                                combineFilmList.push ({
                                    film : film,
                                    homeFilm : homeFilmList[index]
                                });
                            }
                        });
                        reply(combineFilmList);
                    }
                    else {
                        reply(null);
                    }
                });
            }
            else {
                reply(null);
            }
        })
    }

    public getFilmInfoById(request : Hapi.Request , reply : Hapi.ReplyNoContinue) {
        const db = request.server.app.db as Knex;
        const id = request.params['id'];
        db.select().from('film').where('id','=',id).then((result : any) => {
            if( result && result.length > 0 ) {
                reply(result[0]);
            }
            else {
                reply(null);
            }
        }).catch(error => {
            reply(Boom.badImplementation(error))
        })
    }

    private static get  getFilmInfoByIdValidate () {
        return  {
            params : {
                id : Joi.number().required()
            }
        };
    }

}