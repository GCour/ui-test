import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiServicesLibModule } from 'ui-services-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiServicesLibModule
  ],
  exports: [UiServicesLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
