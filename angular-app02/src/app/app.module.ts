import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Routing
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Bootstrap

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Routing
    HttpClientModule, // HttpClientModule
    NgbModule // Bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
