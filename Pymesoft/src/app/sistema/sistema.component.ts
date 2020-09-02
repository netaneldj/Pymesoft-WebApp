import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Sistema } from '../models/sistema.model';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {
  @Input() sistema: Sistema
  @Input() posicion: number
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<Sistema>;
  
  constructor() { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ver() {
    this.clicked.emit(this.sistema);
    return false;
  }
}
