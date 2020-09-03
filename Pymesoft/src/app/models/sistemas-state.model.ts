import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sistema } from './sistema.model';
import { SistemasApiClient } from './sistemas-api-client-model';
import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

// ESTADO
export interface SistemasState {
    items: Sistema[];
    loading: boolean;
    favorito: Sistema;
}

export function intializeSistemasState() {
  return {
    items: [],
    loading: false,
    favorito: null
  };
}

// ACCIONES
export enum SistemasActionTypes {
  NUEVO_SISTEMA = '[Sistemas] Nuevo',
  ELEGIDO_FAVORITO = '[Sistemas] Favorito',
  VOTE_UP = '[Sistemas] Vote Up',
  VOTE_DOWN = '[Sistemas] Vote Down',
  INIT_MY_DATA = '[Sistemas] Init My Data'
}

export class NuevoSistemaAction implements Action {
  type = SistemasActionTypes.NUEVO_SISTEMA;
  constructor(public sistema: Sistema) {}
}

export class ElegidoFavoritoAction implements Action {
  type = SistemasActionTypes.ELEGIDO_FAVORITO;
  constructor(public sistema: Sistema) {}
}

export class VoteUpAction implements Action {
  type = SistemasActionTypes.VOTE_UP;
  constructor(public sistema: Sistema) {}
}

export class VoteDownAction implements Action {
  type = SistemasActionTypes.VOTE_DOWN;
  constructor(public sistema: Sistema) {}
}

export class InitMyDataAction implements Action {
  type = SistemasActionTypes.INIT_MY_DATA;
  constructor(public sistema: string[]) {}
}

export type SistemasActions = NuevoSistemaAction | ElegidoFavoritoAction
  | VoteUpAction | VoteDownAction | InitMyDataAction;

// REDUCERS
export function reducerSistemas(
  state: SistemasState,
  action: SistemasActions
): SistemasState {
  switch (action.type) {
    case SistemasActionTypes.INIT_MY_DATA: {
      const sistemas: string[] = (action as InitMyDataAction).sistema;
      return {
          ...state,
          items: sistemas.map((s) => new Sistema(s, ''))
        };
    }
    case SistemasActionTypes.NUEVO_SISTEMA: {
      return {
          ...state,
          items: [...state.items, (action as NuevoSistemaAction).sistema ]
        };
    }
    case SistemasActionTypes.ELEGIDO_FAVORITO: {
        state.items.forEach(x => x.setSelected(false));
        const fav: Sistema = (action as ElegidoFavoritoAction).sistema;
        fav.setSelected(true);
        return {
          ...state,
          favorito: fav
        };
    }
    case SistemasActionTypes.VOTE_UP: {
        const s: Sistema = (action as VoteUpAction).sistema;
        s.voteUp();
        return { ...state };
    }
    case SistemasActionTypes.VOTE_DOWN: {
        const s: Sistema = (action as VoteDownAction).sistema;
        s.voteDown();
        return { ...state };
    }
  }
  return state;
}

// EFFECTS
@Injectable()
export class SistemasEffects {
  @Effect()
  nuevoAgregado$: Observable<Action> = this.actions$.pipe(
    ofType(SistemasActionTypes.NUEVO_SISTEMA),
    map((action: NuevoSistemaAction) => new ElegidoFavoritoAction(action.sistema))
  );

  constructor(private actions$: Actions) {}
}