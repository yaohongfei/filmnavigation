import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './panel/login/login.component';
import { VideoComponent } from './panel/video/video.component';
import { SearchResultComponent } from './panel/search-result/search-result.component';

const routes : Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path : 'video',
        component : VideoComponent
      },
      {
        path : 'search-result',
        component : SearchResultComponent
      }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });