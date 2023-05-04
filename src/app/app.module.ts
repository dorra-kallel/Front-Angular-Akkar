import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingsComponent } from './pages/listings/listings.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewPropertyComponent } from './pages/view-property/view-property.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddReservationComponent } from './pages/add-reservation/add-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListingsComponent,
    RegisterComponent,
    ViewPropertyComponent,
    ContactComponent,
    PostsComponent,
    AddReservationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
