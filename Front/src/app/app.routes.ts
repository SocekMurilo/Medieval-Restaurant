import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageUserComponent } from './home-page-user/home-page-user.component';
import { HomePageAdmComponent } from './home-page-adm/home-page-adm.component';
import { AddProductComponent } from './add-product/add-product.component'
import { TotemComponent } from "./totem/totem.component"
import { OrdersComponent } from "./orders/orders.component"
import { PromotionsComponent } from "./promotions/promotions.component"
import { CartComponent } from "./cart/cart.component"

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin',
    children: [
        { path: "", component: HomePageAdmComponent},
        { path: "addproduct", component: AddProductComponent },
        { path: "totem",
        children: [
            {path: "", component: TotemComponent},
            {path: "cart", component: CartComponent},
        ]},
        {path: "orders", component: OrdersComponent}]},
    {path: 'user', component: HomePageUserComponent},
    {path: 'ticket', component: PromotionsComponent},
    
];
    