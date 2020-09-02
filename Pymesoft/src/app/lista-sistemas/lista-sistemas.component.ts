import { Component, OnInit } from '@angular/core';
import { Sistema } from './../models/sistema.model';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.css']
})
export class ListaSistemasComponent implements OnInit {
  sistemas: Sistema[];
  constructor() {
    this.sistemas = []
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
    this.sistemas.push(new Sistema(nombre, url));
    return false;
  }

  elegido(s: Sistema) {
    this.sistemas.forEach(function (x) {x.setSelected(false);});
    s.setSelected(true); 
  }

}
