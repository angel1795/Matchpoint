import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { CarouselSearcherComponent } from './carousel-searcher/carousel-searcher.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
      CardsComponent,
      CardsComponent,
      FooterComponent,
      HomeMenuComponent,
      CarouselSearcherComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
