import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Sistema } from '../models/sistema.model';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {
  @Input() sistema: Sistema
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { 
  }

  ngOnInit(): void {
  }

}
