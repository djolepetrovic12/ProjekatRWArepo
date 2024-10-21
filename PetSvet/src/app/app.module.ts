import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFeedComponent } from './components/event-feed/event-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFeedComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
