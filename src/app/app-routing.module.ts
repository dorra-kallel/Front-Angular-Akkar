import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureUpdateComponent } from './furniture-update/furniture-update.component';
import { DetailsfurnitureComponent } from './detailsfurniture/detailsfurniture.component';
import { DisplayCommandComponent } from './display-command/display-command.component';
import { DetailsCommandComponent } from './details-command/details-command.component';
import { AddCommandComponent } from './add-command/add-command.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [

  {path:"detailsF",component:FurnitureDetailsComponent},
  {path:"furniture", component:FurnitureComponent},
  {path:"update/:id", component:FurnitureUpdateComponent},
  {path:"furniture-details/:id",component:DetailsfurnitureComponent},
  {path:"command",component:DisplayCommandComponent},
  {path:"detailsC/:id",component:DetailsCommandComponent},
  {path:"front",component:AddCommandComponent},
  {path:"panier/:id", component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
