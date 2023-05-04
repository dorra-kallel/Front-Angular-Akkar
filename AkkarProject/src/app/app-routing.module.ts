import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { UpdateAnnouncementComponent } from './announcement/update-announcement/update-announcement.component';
import { CreateAnnouncementComponent } from './announcement/create-announcement/create-announcement.component';
import { AnnouncementDetailsComponent } from './announcement/announcement-details/announcement-details.component';
import { SimilarAnnouncementComponent } from './announcement/similar-announcement/similar-announcement.component';
import { LowerPriceComponent } from './announcement/lower-price/lower-price.component';
import { HomeComponent } from './home/home.component';
import { FavoriteListComponent } from './announcement/favorite-list/favorite-list.component';



const routes: Routes = [
 
 //  {path:"", redirectTo:"index", pathMatch:"full"},
 
  {path:"", component:HomeComponent},
  {path:"announcement-list", component:AnnouncementListComponent},
  {path:"annoucement-details/:id", component:AnnouncementDetailsComponent},
  {path:"create-announcement", component:CreateAnnouncementComponent},
  {path:"update-announcement/:id", component:UpdateAnnouncementComponent},
  {path:"similar-announcements/:id", component:SimilarAnnouncementComponent},
  {path:"lower-price/:price", component:LowerPriceComponent},
  {path:"favorite-list/:id", component:FavoriteListComponent},
  {path:"**", component:HomeComponent} //doit être toujours en dernière position
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
