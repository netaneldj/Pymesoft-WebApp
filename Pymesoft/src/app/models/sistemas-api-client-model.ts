import { Sistema } from './sistema.model';
import { Subject, BehaviorSubject } from 'rxjs';

export class SistemasApiClient {
	sistemas: Sistema[];
	current: Subject<Sistema> = new BehaviorSubject<Sistema>(null);
	constructor() {
       this.sistemas = [];
	}
	add(s:Sistema){
	  this.sistemas.push(s);
	}
	getAll(): Sistema[]{
	  return this.sistemas;
	}
	
	getById(id: string): Sistema{
		return this.sistemas.filter(function(s){return s.id.toString() === id;})[0];
	}

	elegir(s: Sistema) {
		this.sistemas.forEach(x => s.setSelected(false));
		s.setSelected(true);
		this.current.next(s);
	}

	subscribeOnChange(fn){
		this.current.subscribe(fn);
	}
}