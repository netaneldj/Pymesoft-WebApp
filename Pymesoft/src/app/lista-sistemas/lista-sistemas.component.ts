import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.css']
})
export class ListaSistemasComponent implements OnInit {
  sistemas: string[];
  constructor() {
    this.sistemas = ['Control de Personal','Liquidación de Sueldos','Gestión','Seguros']
   }

  ngOnInit(): void {
  }

}
