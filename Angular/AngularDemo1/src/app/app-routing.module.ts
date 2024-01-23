import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RegistrationtddComponent } from './registrationtdd/registrationtdd.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"products/:x",component:ProductdetailsComponent},
  {path:"addp",component:AddproductComponent},
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"rform",component:RegisterationComponent},
  {path:"tdform",component:RegistrationtddComponent},
  {path:"" ,redirectTo:'rform',pathMatch:'full'},
  {path:"**" ,component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
