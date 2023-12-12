import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaCarranzaComponent } from './casa-carranza.component';

describe('CasaCarranzaComponent', () => {
  let component: CasaCarranzaComponent;
  let fixture: ComponentFixture<CasaCarranzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaCarranzaComponent]
    });
    fixture = TestBed.createComponent(CasaCarranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
