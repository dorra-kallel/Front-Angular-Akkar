import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommandComponent } from './details-command.component';

describe('DetailsCommandComponent', () => {
  let component: DetailsCommandComponent;
  let fixture: ComponentFixture<DetailsCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
