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
import { ChatComponent } from './chat/chat.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


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
      ChatComponent,
      UserprofileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
