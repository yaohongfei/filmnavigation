import { Component,OnInit } from '@angular/core';
import { UserState } from '../user/api/models/userstate.model';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';

@Component({
    selector : 'fn-home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    @select(['user']) readonly userState$: Observable<UserState>;

    public isLogin : boolean;
    public userName : string;
    
    ngOnInit () {
        this.userState$.subscribe((userState : UserState) => {
            if(userState && userState.isLogin && userState.userInfo){
                this.isLogin = userState.isLogin;
                this.userName = userState.userInfo.userName;
            }
            else{
                this.isLogin = userState.isLogin;
                this.userName = '';
            }

        })
    }
}