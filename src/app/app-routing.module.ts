import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurbusinessComponent } from './ourbusiness/ourbusiness.component';
import { HomeComponent } from './home/home.component';
import { OurprocessComponent } from './ourprocess/ourprocess.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'ourbusiness', component: OurbusinessComponent},
  {path: 'ourprocess', component: OurprocessComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
