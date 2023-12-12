import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClimaComponent } from './navbar-clima.component';

describe('NavbarClimaComponent', () => {
  let component: NavbarClimaComponent;
  let fixture: ComponentFixture<NavbarClimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarClimaComponent]
    });
    fixture = TestBed.createComponent(NavbarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
