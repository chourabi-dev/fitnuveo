import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CoachPageComponent } from './pages/coach-page/coach-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    CoachPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
