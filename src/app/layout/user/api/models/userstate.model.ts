import { User } from '../../../../model/user';

export interface UserState {
    isLogin : boolean;
    userInfo? : User;    
}
