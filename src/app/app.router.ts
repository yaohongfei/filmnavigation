import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';

const routes : Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });