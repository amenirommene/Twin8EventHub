import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { EventCardComponent } from './features/events/components/event-card/event-card.component';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,//module externe depuis node_modules
    AppRoutingModule, //module interne qui sous trouve sous src/app
   CardComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
