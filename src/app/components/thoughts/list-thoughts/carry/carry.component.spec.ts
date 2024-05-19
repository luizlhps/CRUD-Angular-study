/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarryComponent } from './carry.component';

describe('CarryComponent', () => {
  let component: CarryComponent;
  let fixture: ComponentFixture<CarryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
