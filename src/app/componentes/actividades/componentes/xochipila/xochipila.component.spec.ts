import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XochipilaComponent } from './xochipila.component';

describe('XochipilaComponent', () => {
  let component: XochipilaComponent;
  let fixture: ComponentFixture<XochipilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XochipilaComponent]
    });
    fixture = TestBed.createComponent(XochipilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
