import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSolutionsComponent } from './existing-solutions.component';

describe('ExistingSolutionsComponent', () => {
  let component: ExistingSolutionsComponent;
  let fixture: ComponentFixture<ExistingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
