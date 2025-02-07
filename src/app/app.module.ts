import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeadComponent } from './components/body-parts/head/head.component';
import { ChestComponent } from './components/body-parts/chest/chest.component';
import { StomachComponent } from './components/body-parts/stomach/stomach.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeadComponent,
    ChestComponent,
    StomachComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
