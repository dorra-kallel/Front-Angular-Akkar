import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';
import { FormsModule } from '@angular/forms';
import { ReclamationService } from './service/reclamation.service';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';


@NgModule({
  declarations: [
    AppComponent,
    AddReclamationComponent,
    AjoutReclamationComponent,
    UpdateReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
  ],
  providers: [ReclamationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
