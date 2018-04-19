import { Component, OnInit ,Input} from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../service/service';
import { User } from '../../model/user';
 
@Component({
    selector : 'fn-login',
    templateUrl : './login.component.html',
    styleUrls : ['login.component.scss']
})

export class LoginComponent {

    public title : string;
    public titleEx : string;
    public waysOfLogin : string;
    public login_user : string;
    public login_password : string;
    public register_user : string;
    public register_password : string;
    public register_pwdConfirm : string;
    public errorMessage : string = '';

    @Input()
    private operate : string;

    constructor(private ngbActiveModal:NgbActiveModal ,
     private service : Service){}

    load(operate : string) {
        if(operate === 'login')
        {
            this.title = '登录'
            this.operate = 'login';
            this.titleEx = '注册';
        }
        if(operate === 'register')
        {
            this.title = '注册'
            this.operate = 'register';
            this.titleEx = '登录';
        }

        this.waysOfLogin = '其它方式登录';
    }

    public close() {
        this.ngbActiveModal.close();
    }
    

    public changeOperation() {
        if(this.operate === 'login' || this.operate === 'other'){
            this.title = '注册'
            this.operate = 'register';
            this.titleEx = '登录';
        }
        else{
            this.title = '登录'
            this.operate = 'login';
            this.titleEx = '注册';
        }
    }

    public otherLogin() {
        if(this.operate === 'login'){
            this.operate = 'other';
            this.waysOfLogin = '账号密码登录';
        }
        else{
            this.operate = 'login';
            this.waysOfLogin = '其它方式登录';
        }
 
    }

    public signIn() {
        const user = this.login_user;
        const password = this.login_password;
        this.service.getRequest(`user/login/${user}/${password}`).then((result : User[]) => {
            if(result && result.length > 0){
                this.ngbActiveModal.close(result);
            }
            else{
                this.errorMessage = '帐号或密码错误，请重新输入';
            }
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    public updateCursor() {
        let loginObj = document.getElementById('login') as HTMLInputElement;
        let registerObj = document.getElementById('register') as HTMLInputElement;
        if(this.operate === 'login'){
            if(!this.login_user || !this.login_password){
                loginObj.style.cursor = 'not-allowed';
                loginObj.disabled = true;
            }
            else{
                loginObj.disabled = false;
                loginObj.style.cursor = 'pointer';
            }
        }

        if(this.operate === 'register'){
            if(!this.register_user || !this.register_pwdConfirm || !this.register_password){
                registerObj.style.cursor = 'not-allowed';
                registerObj.disabled = true;
            }
            else{
                registerObj.disabled = false;
                registerObj.style.cursor = 'pointer';
            }
        }
    }

}