import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCardBackgroundPosterComponent } from './media-card-background-poster.component';

describe('MediaCardBackgroundPosterComponent', () => {
  let component: MediaCardBackgroundPosterComponent;
  let fixture: ComponentFixture<MediaCardBackgroundPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaCardBackgroundPosterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaCardBackgroundPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
