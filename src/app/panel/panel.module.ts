import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { HotFilmComponent } from './hot-film/hot-film.component';
import { VideoComponent } from './video/video.component';
import { RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
    declarations : [LoginComponent,
        HotFilmComponent,
        VideoComponent,
        SearchResultComponent],
    imports : [CommonModule,
        FormsModule,
        HttpModule,
        CookieModule.forRoot(),
        RouterModule],
    providers : [],
    exports : [LoginComponent,
        HotFilmComponent,
        VideoComponent,
        SearchResultComponent],
    entryComponents : [LoginComponent]
})

export class PanelModule {};