import { Component, OnInit } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { ActivatedRoute } from '@angular/router';
import { SistemasApiClient } from '../models/sistemas-api-client-model';

@Component({
  selector: 'app-sistema-detalle',
  templateUrl: './sistema-detalle.component.html',
  styleUrls: ['./sistema-detalle.component.css']
})
export class SistemaDetalleComponent implements OnInit {
  sistema: Sistema;

  constructor(private route: ActivatedRoute, private sistemasApiClient: SistemasApiClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sistema = null;
  }

}
