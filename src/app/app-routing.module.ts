import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';


const routes: Routes = [
  {path:'searchDeleteReclam', component: AddReclamationComponent},
  {path:"reclamation", component:AjoutReclamationComponent},
  {path:"update/:id", component:UpdateReclamationComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
