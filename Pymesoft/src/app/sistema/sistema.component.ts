import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {
  @Input() nombre: string
  constructor() { 
    this.nombre = 'pymesoft'
  }

  ngOnInit(): void {
  }

}
