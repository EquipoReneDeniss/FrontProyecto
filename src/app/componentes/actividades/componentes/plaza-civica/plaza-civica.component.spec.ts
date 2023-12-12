import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazaCivicaComponent } from './plaza-civica.component';

describe('PlazaCivicaComponent', () => {
  let component: PlazaCivicaComponent;
  let fixture: ComponentFixture<PlazaCivicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlazaCivicaComponent]
    });
    fixture = TestBed.createComponent(PlazaCivicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
