import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicIslandComponent } from './dynamic-island.component';

describe('DynamicIslandComponent', () => {
  let component: DynamicIslandComponent;
  let fixture: ComponentFixture<DynamicIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [DynamicIslandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
