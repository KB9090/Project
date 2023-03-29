import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';

import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes =[
{ path: "home",component:HomeComponent },
{ path: "about",component:AboutComponent },
{ path: "faq",component:FAQComponent },

{ path: "addcustomer",component:AddcustomerComponent },
{ path: "viewcustomer",component:ViewcustomerComponent },
{ path: "updatecustomer/:id",component:UpdatecustomerComponent },

{ path: "addproduct",component:AddproductComponent },
{ path: "viewproduct",component:ViewproductComponent },
{ path: "updateproduct/:id",component:UpdateproductComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
