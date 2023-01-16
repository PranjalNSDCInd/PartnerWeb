import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerLoginComponent } from './modules/pages/partner-login/partner-login.component';
import { UserLoginComponent } from './modules/pages/user-login/user-login.component';
import { AdminLoginComponent } from './modules/pages/admin-login/admin-login.component';
import { HeaderComponent } from './core/header/header/header.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { LoaderComponent } from './shared/componenets/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnerLoginComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
