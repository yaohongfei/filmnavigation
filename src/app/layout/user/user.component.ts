import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../panel/login/login.component';
import { User } from '../../model/user';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../../service/user.service';
import { UserAction } from './api/actions/user.actions';
import { UserState } from './api/models/userstate.model';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
 
@Component({
    selector : 'fn-user',
    templateUrl : './user.component.html',
    styleUrls : ['user.component.scss']
})

export class UserComponent implements OnInit {

    public isLogin : boolean = false;
    public loginUser : User ;

    @select(['user']) readonly userState$: Observable<UserState>;

    constructor(private router : Router,
       private ngbModel : NgbModal,
       private cookieService : CookieService,
       private userService : UserService,
       private userAction : UserAction
    ){}

    ngOnInit() {
    //    this.userAction.loadUser;
       this.userService.getUserCookie().then(user => {
            if(user){
                this.loginUser = user;
                this.isLogin = true;
                this.buildRedux();
            }
       });
       this.userState$.subscribe((userState : UserState) => {
    })
    }

    public login() {
            const model =  this.ngbModel.open(LoginComponent,{ size: 'sm',backdrop:'static'});
            model.componentInstance.load('login');
            model.result.then((result : User[]) => {
                let user : User = result[0];
                this.loginUser = user;
                this.isLogin = true;
                this.cookieService.put('fn-user',JSON.stringify(user));
                this.userService.setUserInfo(user);
                this.buildRedux();
            })
    }

    buildRedux () {
        
        if(this.isLogin){
            let userState : UserState = {isLogin : true,userInfo : this.loginUser};
            this.userAction.loadUser(userState);
        }
        else{
            this.userAction.cancelLoadUser({isLogin : false});
        }
    }

    public register() {
        // this.router.navigate(['/login']).catch(error => {
        //     console.log(error);
        // })
        let a : string = this.cookieService.get('yhf');
        const model =  this.ngbModel.open(LoginComponent,{ size: 'sm',backdrop:'static'});
        model.componentInstance.load('register');
    }

    public logOut(){
        this.loginUser = null;
        this.userService.setUserInfo(null);
        this.cookieService.remove('fn-user');
        this.isLogin = false;
        this.buildRedux();
    }

}