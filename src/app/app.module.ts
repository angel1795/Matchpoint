import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Boton_unirseComponent } from './boton_unirse/boton_unirse.component';
import { Event_infoComponent } from './event_info/event_info.component';
import { CardsComponent } from './landing/cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMenuComponent } from './landing/home-menu/home-menu.component';
import { CarouselSearcherComponent } from './landing/carousel-searcher/carousel-searcher.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LandingComponent } from './landing/landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EventCreateComponent } from './event-create/event-create.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
      CardsComponent,
      FooterComponent,
      HomeMenuComponent,
      LandingComponent,
      CarouselSearcherComponent,
      LoginComponent,
      RegisterComponent,
      Boton_unirseComponent,
      Event_infoComponent,
      LandingComponent,
      EventCreateComponent,
      ChatComponent,
      UserprofileComponent,
      UserEditComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
