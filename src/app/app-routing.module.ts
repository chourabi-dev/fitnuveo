import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachPageComponent } from './pages/coach-page/coach-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path:'', component:SearchPageComponent },
  { path:'coach', component:CoachPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
