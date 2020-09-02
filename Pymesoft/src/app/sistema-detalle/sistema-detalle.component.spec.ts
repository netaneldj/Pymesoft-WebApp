import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaDetalleComponent } from './sistema-detalle.component';

describe('SistemaDetalleComponent', () => {
  let component: SistemaDetalleComponent;
  let fixture: ComponentFixture<SistemaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
