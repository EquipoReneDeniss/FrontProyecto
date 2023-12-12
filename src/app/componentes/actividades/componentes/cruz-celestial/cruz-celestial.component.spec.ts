import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzCelestialComponent } from './cruz-celestial.component';

describe('CruzCelestialComponent', () => {
  let component: CruzCelestialComponent;
  let fixture: ComponentFixture<CruzCelestialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruzCelestialComponent]
    });
    fixture = TestBed.createComponent(CruzCelestialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
