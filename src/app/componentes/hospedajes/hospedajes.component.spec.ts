import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajesComponent } from './hospedajes.component';

describe('HospedajesComponent', () => {
  let component: HospedajesComponent;
  let fixture: ComponentFixture<HospedajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospedajesComponent]
    });
    fixture = TestBed.createComponent(HospedajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
