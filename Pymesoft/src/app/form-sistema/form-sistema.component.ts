import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-form-sistema',
  templateUrl: './form-sistema.component.html',
  styleUrls: ['./form-sistema.component.css']
})
export class FormSistemaComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Sistema>;
  fg: FormGroup;
  minLongitud = 3;
  searchResults: string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambio el formulario: ',form);      
    });
   }

  ngOnInit(): void {
    let elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(() => ajax('/assets/datos.json'))
      ).subscribe(ajaxResponse => {
        this.searchResults = ajaxResponse.response;
      });
  }

  guardar(nombre: string, url: string) : boolean {
    let s = new Sistema(nombre, url);
    this.onItemAdded.emit(s);
    return false;
  }

  nombreValidator(control: FormControl): { [s: string] : boolean } {
    const l = control.value.toString().trim().length;
    if (l>0 && l<5) {
      return { invalidNombre: true };
    }
    return null;
  }

  nombreValidatorParametrizable(minLong: number) {
    return (control: FormControl): {[s: string]: boolean} | null => {
      const l = control.value.toString().trim().length;      
      if (l>0 && l<minLong) {
        return { minLongNombre: true };
      }     
      return null;
    }
  }

}
