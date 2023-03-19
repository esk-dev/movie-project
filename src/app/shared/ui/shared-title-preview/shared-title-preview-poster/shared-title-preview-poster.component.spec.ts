import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTitlePreviewPosterComponent } from './shared-title-preview-poster.component';

describe('SharedTitlePreviewPosterComponent', () => {
  let component: SharedTitlePreviewPosterComponent;
  let fixture: ComponentFixture<SharedTitlePreviewPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTitlePreviewPosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTitlePreviewPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
