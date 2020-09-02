import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SistemaComponent } from './sistema/sistema.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';
import { SistemaDetalleComponent } from './sistema-detalle/sistema-detalle.component';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';
import { SistemasApiClient } from './models/sistemas-api-client-model';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListaSistemasComponent},  
  { path: 'sistema/:id', component: SistemaDetalleComponent}    
];

@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    ListaSistemasComponent,
    SistemaDetalleComponent,
    FormSistemaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),    
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SistemasApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
