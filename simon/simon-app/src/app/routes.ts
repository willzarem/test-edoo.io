import {Routes} from '@angular/router';
import {SimonComponent} from './simon/simon.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'game',
    component: SimonComponent
  }
];
