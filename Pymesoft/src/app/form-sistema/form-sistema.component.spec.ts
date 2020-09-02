import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSistemaComponent } from './form-sistema.component';

describe('FormSistemaComponent', () => {
  let component: FormSistemaComponent;
  let fixture: ComponentFixture<FormSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
