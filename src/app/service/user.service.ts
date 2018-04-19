import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { User } from '../model/user'
import { Service } from './service';

@Injectable()

export class UserService {

    private userInfo : User;

    constructor(private cookieService : CookieService,
        private service : Service){}

    public getUserCookie() : Promise<any>{
        if(this.cookieService.get('fn-user')){
            let userCookie : User = JSON.parse(this.cookieService.get('fn-user'));
            let userId = userCookie.userId;
            return this.service.getRequest(`user/${userId}`).then((result : User[]) => {
                if(result && result.length > 0 ){
                    if((result[0].password === userCookie.password) 
                    && (result[0].userName === userCookie.userName)){
                        this.userInfo = userCookie;
                        return userCookie;
                    }
                    else{
                        this.cookieService.remove('fn-user');
                        return null;
                    }
                }
                else{
                    return null;
                }
            })

            
        }
        else{
            return null;
        }
    }

    public get  getUserInfo(){
        return this.userInfo ? this.userInfo : null;
    }  

    public setUserInfo(user : User){
        if(user){
            this.userInfo = user;
        }
    }
}