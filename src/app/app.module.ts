import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule
({
  declarations:
  [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  FAQComponent,
  AddcustomerComponent,
  UpdatecustomerComponent,
  ViewcustomerComponent,
  AddproductComponent,
  UpdateproductComponent,
  ViewproductComponent,
  ],

  imports:[BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
