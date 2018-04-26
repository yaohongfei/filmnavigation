import { UserState } from '../models/userstate.model';
import { UserAction } from '../actions/user.actions';

const initialState: UserState = {
    isLogin: false
  };

export function UserReducer(state : UserState = initialState, {type, payload} : {type : string,payload : UserState}) : UserState {
    switch(type){
        case UserAction.LOAD_USER : 
        case UserAction.LOAD_USER_CANCELLED : 
        return {
            ...payload
        }
        default : return state
    }
}
