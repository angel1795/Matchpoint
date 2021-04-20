/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Event_infoComponent } from './event_info.component';

describe('Event_infoComponent', () => {
  let component: Event_infoComponent;
  let fixture: ComponentFixture<Event_infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event_infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event_infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
