import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazaComponent } from './terraza.component';

describe('TerrazaComponent', () => {
  let component: TerrazaComponent;
  let fixture: ComponentFixture<TerrazaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerrazaComponent]
    });
    fixture = TestBed.createComponent(TerrazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
