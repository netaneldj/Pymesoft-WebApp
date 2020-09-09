import { Sistema } from './sistema.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store'
import { AppState } from '../app.module';
import { NuevoSistemaAction, ElegidoFavoritoAction } from './sistemas-state.model';

export class SistemasApiClient {
	constructor(private store: Store<AppState>) {
	}
	add(s:Sistema){
		this.store.dispatch(new NuevoSistemaAction(s));
	}

	elegir(s: Sistema) {
		this.store.dispatch(new ElegidoFavoritoAction(s));		
	}
}