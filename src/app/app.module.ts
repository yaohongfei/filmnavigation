import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { Routing } from './app.router';
import { PanelModule } from './panel/panel.module';
import { Service } from './service/service';
import { UserService } from './service/user.service';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    Routing,
    PanelModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [Service,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
