import {v4 as uuid} from 'uuid';

export class Sistema {
    private selected: boolean;
    public especificaciones: string[];
    id = uuid();
    
    constructor(public nombre:string, public u:string, public votes: number = 0) {
        this.especificaciones = ['Aplicación Multiusuario en Español','Sistema en red'];
    } 
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
    voteUp(): any {
        this.votes++;
      }
      voteDown(): any {
        this.votes--;
      }    
}