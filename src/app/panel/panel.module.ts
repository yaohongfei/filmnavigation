import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

@NgModule({
    declarations : [LoginComponent],
    imports : [CommonModule,
        FormsModule,
        HttpModule,
        CookieModule.forRoot()],
    providers : [],
    exports : [LoginComponent],
    entryComponents : [LoginComponent]
})

export class PanelModule {};