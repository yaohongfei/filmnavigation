import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
  ],
  providers: [],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
