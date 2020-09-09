import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SistemaComponent } from './sistema/sistema.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';
import { SistemaDetalleComponent } from './sistema-detalle/sistema-detalle.component';
import { SistemasApiClient } from './models/sistemas-api-client-model';
import { FormSistemaComponent } from './form-sistema/form-sistema.component';
import { SistemasState, reducerSistemas, intializeSistemasState, SistemasEffects } from './models/sistemas-state.model';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListaSistemasComponent},  
  { path: 'sistema/:id', component: SistemaDetalleComponent}    
];

//redux init
export interface AppState {
  sistemas: SistemasState;
}

const reducers: ActionReducerMap<AppState> = {
  sistemas: reducerSistemas
}

let reducersInitialState = {
  sistemas: intializeSistemasState()
}
//redux fin init

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
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState }),
    EffectsModule.forRoot([SistemasEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
