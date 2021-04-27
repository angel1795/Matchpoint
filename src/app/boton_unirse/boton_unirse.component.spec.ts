/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Boton_unirseComponent } from './boton_unirse.component';

describe('Boton_unirseComponent', () => {
  let component: Boton_unirseComponent;
  let fixture: ComponentFixture<Boton_unirseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boton_unirseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boton_unirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
