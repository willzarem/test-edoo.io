import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimonComponent } from './simon/simon.component';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SimonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,  { enableTracing: !environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
