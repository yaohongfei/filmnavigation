import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { UserState } from '../models/userstate.model'; 

@Injectable()
export class UserAction {
    static readonly LOAD_USER = 'user/LOAD_USER';
    // static readonly LOAD_USER_STARTED = 'user/LOAD_USER_STARTED';
    // static readonly LOAD_USER_SUCCEEDED = 'user/LOAD_USER_SUCCEEDED';
    // static readonly LOAD_USER_FAILED = 'user/LOAD_USER_FAILED';
    static readonly LOAD_USER_CANCELLED = 'user/LOAD_USER_CANCELLED';


    @dispatch()
    loadUser = (payload : UserState) => ({
        type: UserAction.LOAD_USER,
        payload
      });

    @dispatch()
    cancelLoadUser = (payload : UserState) => ({
        type : UserAction.LOAD_USER_CANCELLED,
        payload
    })  
    
}