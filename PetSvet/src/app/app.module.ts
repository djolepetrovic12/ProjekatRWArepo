import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFeedComponent } from './components/event-feed/event-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LogRegPageComponent } from './components/log-reg-page/log-reg-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    EventFeedComponent,
    InfoCardComponent,
    LogRegPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
