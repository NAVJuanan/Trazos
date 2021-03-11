import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Routing
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

// setup routing
const routes: Routes = [
  { path: "", component: Page1Component },
  { path: "2", component: Page2Component }, // http://localhost:4200/2
  { path: "3", component: Page3Component }, // http://localhost:4200/3
  { path: "characters", component: CharacterComponent }, // http://localhost:4200/characters
  { path: "character-detail/:id", component: CharacterDetailComponent } // http://localhost:4200/character-detail + id parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
