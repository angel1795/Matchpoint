import { Event_infoComponent } from './event_info/event_info.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path: "", component: LandingComponent, pathMatch: "full"},
  {path: "eventcreate", component: EventCreateComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "userprofile", component: UserprofileComponent},
  {path: "useredit", component: UserEditComponent},
  {path: "eventoinfo", component: Event_infoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
