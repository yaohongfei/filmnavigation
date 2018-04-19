import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../panel/login/login.component';
import { User } from '../../model/user';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../../service/user.service';
 
@Component({
    selector : 'fn-user',
    templateUrl : './user.component.html',
    styleUrls : ['user.component.scss']
})

export class UserComponent implements OnInit {

    public isLogin : boolean = false;
    public loginUser : User ;

    constructor(private router : Router,
       private ngbModel : NgbModal,
       private cookieService : CookieService,
       private userService : UserService
    ){}

    ngOnInit() {
       this.userService.getUserCookie().then(user => {
            if(user){
                this.loginUser = user;
                this.isLogin = true;
            }
       });
 
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
            })
    }

    public register() {
        // this.router.navigate(['/login']).catch(error => {
        //     console.log(error);
        // })
        const model =  this.ngbModel.open(LoginComponent,{ size: 'sm',backdrop:'static'});
        model.componentInstance.load('register');
    }

    public logOut(){
        this.loginUser = null;
        this.userService.setUserInfo(null);
        this.cookieService.remove('fn-user');
        this.isLogin = false;
    }

}