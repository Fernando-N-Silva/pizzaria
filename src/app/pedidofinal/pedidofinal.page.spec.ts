import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidofinalPage } from './pedidofinal.page';

describe('PedidofinalPage', () => {
  let component: PedidofinalPage;
  let fixture: ComponentFixture<PedidofinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidofinalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidofinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
