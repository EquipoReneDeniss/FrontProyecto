import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilobitComponent } from './trilobit.component';

describe('TrilobitComponent', () => {
  let component: TrilobitComponent;
  let fixture: ComponentFixture<TrilobitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrilobitComponent]
    });
    fixture = TestBed.createComponent(TrilobitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
