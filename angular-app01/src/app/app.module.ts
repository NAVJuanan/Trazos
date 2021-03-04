import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // font-awesome
import { FirstComponent } from './components/first/first.component'; // new component

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent // new component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule // font-awesome
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
