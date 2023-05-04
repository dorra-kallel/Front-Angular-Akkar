import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewPropertyComponent } from './pages/view-property/view-property.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExpertRegisterComponent } from './pages/expert-register/expert-register.component';
import { ExpertShowUpdateDeleteComponent } from './pages/expert-show-update-delete/expert-show-update-delete.component';
ContactComponent
ViewPropertyComponent
const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"Listings",component:ListingsComponent},
  {path:"contact",component: ContactComponent},
  {path:"register",component:RegisterComponent},
  {path:"view",component: ViewPropertyComponent},
  {path:"ExpertRegister",component:ExpertRegisterComponent},
  {path:"AllExperts",component:ExpertShowUpdateDeleteComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
 
 // {path:"**", component:NotFoundComponent} //doit être toujours en dernière position
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
