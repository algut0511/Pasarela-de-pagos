import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { UserHomeComponent } from "./user-home/user-home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: UserHomeComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);