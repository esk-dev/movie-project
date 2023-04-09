import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRatingViewComponent } from './shared-rating-view.component';

describe('SharedRatingViewComponent', () => {
  let component: SharedRatingViewComponent;
  let fixture: ComponentFixture<SharedRatingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedRatingViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedRatingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
