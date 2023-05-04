import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertShowUpdateDeleteComponent } from './expert-show-update-delete.component';

describe('ExpertShowUpdateDeleteComponent', () => {
  let component: ExpertShowUpdateDeleteComponent;
  let fixture: ComponentFixture<ExpertShowUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertShowUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertShowUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
