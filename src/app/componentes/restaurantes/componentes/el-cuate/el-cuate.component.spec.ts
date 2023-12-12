import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElCuateComponent } from './el-cuate.component';

describe('ElCuateComponent', () => {
  let component: ElCuateComponent;
  let fixture: ComponentFixture<ElCuateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElCuateComponent]
    });
    fixture = TestBed.createComponent(ElCuateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
