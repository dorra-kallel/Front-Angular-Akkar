import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingsComponent } from './pages/listings/listings.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewPropertyComponent } from './pages/view-property/view-property.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExpertRegisterComponent } from './pages/expert-register/expert-register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpertShowUpdateDeleteComponent } from './pages/expert-show-update-delete/expert-show-update-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListingsComponent,
    RegisterComponent,
    ViewPropertyComponent,
    ContactComponent,
    ExpertRegisterComponent,
    ExpertShowUpdateDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ExpertRegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
