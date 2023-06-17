import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetailedInfoComponent } from './media-detailed-info.component';

describe('MediaDetailedInfoComponent', () => {
  let component: MediaDetailedInfoComponent;
  let fixture: ComponentFixture<MediaDetailedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaDetailedInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
