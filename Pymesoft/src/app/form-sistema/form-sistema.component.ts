import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sistema',
  templateUrl: './form-sistema.component.html',
  styleUrls: ['./form-sistema.component.css']
})
export class FormSistemaComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Sistema>;
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.required],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambio el formulario: ',form);      
    });
   }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string) : boolean {
    let s = new Sistema(nombre, url);
    this.onItemAdded.emit(s);
    return false;
  }

}
