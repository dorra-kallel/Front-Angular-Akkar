import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureUpdateComponent } from './furniture-update/furniture-update.component';
import { DetailsfurnitureComponent } from './detailsfurniture/detailsfurniture.component';
import { AddCommandComponent } from './add-command/add-command.component';
import { DisplayCommandComponent } from './display-command/display-command.component';
import { DetailsCommandComponent } from './details-command/details-command.component';
import { UpdateCommandComponent } from './update-command/update-command.component';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [
    AppComponent,
    FurnitureDetailsComponent,
    FurnitureComponent,
    FurnitureUpdateComponent,
    DetailsfurnitureComponent,
    AddCommandComponent,
    DisplayCommandComponent,
    DetailsCommandComponent,
    UpdateCommandComponent,
    PanierComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //utile pour pouvoir utiliser ngModel
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
