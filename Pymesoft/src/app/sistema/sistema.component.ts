import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { VoteUpAction, VoteDownAction } from '../models/sistemas-state.model';

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
  
  constructor(private store: Store<AppState>) { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ver() {
    this.clicked.emit(this.sistema);
    return false;
  }

  voteUp() {
    this.store.dispatch(new VoteUpAction(this.sistema));
    return false;
  }

  voteDown() {
    this.store.dispatch(new VoteDownAction(this.sistema));
    return false;
  }  
}
