import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // font-awesome

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component'; // new component

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent // new component
  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel
    FontAwesomeModule // font-awesome
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
