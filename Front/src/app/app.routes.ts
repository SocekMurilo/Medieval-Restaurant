import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageUserComponent } from './home-page-user/home-page-user.component';
import { HomePageAdmComponent } from './home-page-adm/home-page-adm.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user', component: HomePageUserComponent},
    {path: 'Admin', component: HomePageAdmComponent},

];