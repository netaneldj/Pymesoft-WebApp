import { Sistema } from './sistema.model';

export class SistemasApiClient {
	sistemas:Sistema[];
	constructor() {
       this.sistemas = [];
	}
	add(s:Sistema){
	  this.sistemas.push(s);
	}
	getAll(){
	  return this.sistemas;
    }
}