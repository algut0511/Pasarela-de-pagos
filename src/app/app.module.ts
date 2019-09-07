import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
import { LoginComponent } from "./login/login.component";
import { AppRoutes } from "./app.routes";
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "69624866613-gm4m8k5ajael6vvnfvksp0o8hs0e8hc3.apps.googleusercontent.com"
    )
  },
 
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, UserHomeComponent],
  imports: [BrowserModule, AppRoutes, SocialLoginModule, HttpClientModule],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}