import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaBlancaComponent } from './casa-blanca.component';

describe('CasaBlancaComponent', () => {
  let component: CasaBlancaComponent;
  let fixture: ComponentFixture<CasaBlancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaBlancaComponent]
    });
    fixture = TestBed.createComponent(CasaBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
