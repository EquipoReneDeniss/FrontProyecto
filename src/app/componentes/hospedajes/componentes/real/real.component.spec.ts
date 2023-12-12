import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealComponent } from './real.component';

describe('RealComponent', () => {
  let component: RealComponent;
  let fixture: ComponentFixture<RealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealComponent]
    });
    fixture = TestBed.createComponent(RealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
