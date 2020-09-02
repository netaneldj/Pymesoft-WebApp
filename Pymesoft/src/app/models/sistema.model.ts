export class Sistema {
    private selected: boolean;
    public especificaciones: string[];

    constructor(public nombre:string, public u:string) {
        this.especificaciones = ['Aplicación Multiusuario en Español','Sistema en red'];
    } 
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
}