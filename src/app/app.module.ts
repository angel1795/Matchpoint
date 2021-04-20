import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Boton_unirseComponent } from './boton_unirse/boton_unirse.component';
import { Event_infoComponent } from './event_info/event_info.component';

import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
      CardsComponent,
      CardsComponent,
      FooterComponent,
      Boton_unirseComponent,
      Event_infoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
