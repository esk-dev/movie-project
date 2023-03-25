import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTitlePreviewContentComponent } from './shared-title-preview-content.component';

describe('SharedTitlePreviewContentComponent', () => {
  let component: SharedTitlePreviewContentComponent;
  let fixture: ComponentFixture<SharedTitlePreviewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedTitlePreviewContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedTitlePreviewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
