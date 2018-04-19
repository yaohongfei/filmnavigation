import * as Joi from 'joi';

export interface Configuration {
    data : DataConfiguration,
    server : ServerConfiguration,
    api : ApiConfiguration
}

export interface DataConfiguration {
    client : string,
    host : string,
    user : string,
    password : string,
    database : string
}

export interface ServerConfiguration {
    port : string,
    logPath : "./logs/",
}

export interface ApiConfiguration {
    dataApiUrl : string
}

export function loadConfig() : Configuration{
    let config : Configuration;

    let configPath = './config/config.json';
    const path = require('path');
    let absolutePath = path.resolve(configPath);
    
    try {
        config = require(absolutePath);
    } catch (error) {
        throw new Error('Specified configuration ' + absolutePath + ' could not be loaded.');
    }

    const schema = {
        data: Joi.object().keys({
            client: Joi.string().required(),
            host: Joi.string().required(),
            user: Joi.string().required(),
            password: Joi.string().required(),
            database:Joi.string().required()
        }),

        server: Joi.object().keys({
            port : Joi.number().required(),
            logPath : Joi.string().required()
        }),

        api : Joi.object().keys({
            dataApiUrl : Joi.string().required()
        }),
    }

    let result = Joi.validate(config , schema);
    // const result = Joi.validate(dataList, Joi.array().items(schema), { abortEarly: false, allowUnknown: true });

    if (result.error) {
        throw new Error('Invalid configuration - ' + result.error.message);
      }

    return   config;
}
