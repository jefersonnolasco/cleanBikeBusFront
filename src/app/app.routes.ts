import { Routes } from '@angular/router';
import { PrimeiroComponent } from './pages/primeiro/primeiro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'primeiro',
    component: PrimeiroComponent
  },
  {
    path: 'portfolio',
    component: HomeComponent
  }
];
