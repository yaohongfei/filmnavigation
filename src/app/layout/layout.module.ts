import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
