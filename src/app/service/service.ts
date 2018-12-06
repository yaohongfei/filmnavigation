import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, ResponseContentType, RequestOptionsArgs, RequestMethod } from '@angular/http';
import * as URL from 'url';

@Injectable()

export class Service{
    
    constructor(private http : Http){};

    private doRequest(command : string ,data : any, method : RequestMethod){
        // const requestUrl = URL.resolve('http://101.132.78.227:8090/',command);
        const requestUrl = URL.resolve('http://localhost:8090/',command);
        let headers: Headers = new Headers();
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8090');
        
        const options : RequestOptionsArgs = {
            method : method,
            body : data,
            withCredentials : true,
            headers: headers
        };
        
        return this.http.request(requestUrl , options).toPromise().then((response : Response) => {
            
            return response.json();
        })
        .catch(error => {
            return Promise.reject(error);
        })
    }

    public getRequest(command : string) : Promise<any>{
        return this.doRequest(command,null,RequestMethod.Get);
    }

    public postRequest(command : string,data:any) : Promise<any>{
        return this.doRequest(command,data,RequestMethod.Post);
    }


}