import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SistemaComponent } from './sistema/sistema.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';
import { SistemaDetalleComponent } from './sistema-detalle/sistema-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListaSistemasComponent},  
  { path: 'sistema', component: SistemaDetalleComponent}    
];

@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    ListaSistemasComponent,
    SistemaDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
