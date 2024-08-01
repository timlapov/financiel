import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Error404Component} from "./error404/error404.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {authGuard} from "../services/auth.guard";
import {ActivitiesComponent} from "./activities/activities.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'activities', component: ActivitiesComponent },
  { path: '**', component:  Error404Component},
];
