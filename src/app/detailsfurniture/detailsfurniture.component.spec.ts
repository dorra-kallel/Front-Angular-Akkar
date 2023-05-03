import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfurnitureComponent } from './detailsfurniture.component';

describe('DetailsfurnitureComponent', () => {
  let component: DetailsfurnitureComponent;
  let fixture: ComponentFixture<DetailsfurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsfurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
