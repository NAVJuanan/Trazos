import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

// setup routing
const routes: Routes = [
  { path: "", component: Page1Component },
  { path: "2", component: Page2Component }, // http://localhost:23137/2
  { path: "3", component: Page3Component } // http://localhost:23137/3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
