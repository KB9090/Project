import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './spotify.service';

@NgModule
({
  declarations:
  [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  SearchComponent],

  imports:[BrowserModule,AppRoutingModule,HttpClientModule,FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
