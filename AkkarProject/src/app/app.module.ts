import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { CreateAnnouncementComponent } from './announcement/create-announcement/create-announcement.component';
import { UpdateAnnouncementComponent } from './announcement/update-announcement/update-announcement.component';
import { AnnouncementDetailsComponent } from './announcement/announcement-details/announcement-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SimilarAnnouncementComponent } from './announcement/similar-announcement/similar-announcement.component';
import { LowerPriceComponent } from './announcement/lower-price/lower-price.component';
import { HomeComponent } from './home/home.component';
import { FavoriteListComponent } from './announcement/favorite-list/favorite-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
   
   
    AnnouncementListComponent,
    CreateAnnouncementComponent,
    UpdateAnnouncementComponent,
    AnnouncementDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SimilarAnnouncementComponent,
    LowerPriceComponent,
    HomeComponent,
    FavoriteListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
   NgxPaginationModule  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
