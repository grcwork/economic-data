import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { IndicatorComponent } from './indicator/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
