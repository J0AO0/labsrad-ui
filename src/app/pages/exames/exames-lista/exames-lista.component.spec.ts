/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExamesListaComponent } from './exames-lista.component';

describe('ExamesListaComponent', () => {
  let component: ExamesListaComponent;
  let fixture: ComponentFixture<ExamesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
