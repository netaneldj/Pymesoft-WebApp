import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sistema } from './../models/sistema.model';
import { SistemasApiClient } from '../models/sistemas-api-client-model';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.css']
})
export class ListaSistemasComponent implements OnInit {
  @Output() onItemAdded:EventEmitter<Sistema>;
  updates: string[];

  constructor(public sistemasApiClient:SistemasApiClient) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.sistemasApiClient.subscribeOnChange((s: Sistema) => {
      if (s!=null) {
        this.updates.push('se ha elegido a '+s.nombre);
      }
    });
   }

  ngOnInit(): void {
  }

  agregado(s: Sistema) {
    this.sistemasApiClient.add(s);
    this.onItemAdded.emit(s);
  }

  elegido(s: Sistema) {
    this.sistemasApiClient.elegir(s);
  }

}
