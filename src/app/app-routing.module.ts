import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';

const routes: Routes = [
  { path: "login", component:LoginComponent },
  { path: "register", component:RegisterComponent },
  { path: "home", component:HomeComponent },
  { path: "products", component:ProductsListComponent },
  { path: "admin", component:AdminProductsListComponent },
  { path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
