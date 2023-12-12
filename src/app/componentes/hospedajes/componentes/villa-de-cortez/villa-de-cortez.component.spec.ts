import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaDeCortezComponent } from './villa-de-cortez.component';

describe('VillaDeCortezComponent', () => {
  let component: VillaDeCortezComponent;
  let fixture: ComponentFixture<VillaDeCortezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillaDeCortezComponent]
    });
    fixture = TestBed.createComponent(VillaDeCortezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
