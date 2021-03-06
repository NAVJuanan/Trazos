import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // font-awesome

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule, // font-awesome
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
