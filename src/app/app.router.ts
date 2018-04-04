import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const routes : Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: AppComponent
      }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });