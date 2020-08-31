import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SistemaComponent } from './sistema/sistema.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';

@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    ListaSistemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
