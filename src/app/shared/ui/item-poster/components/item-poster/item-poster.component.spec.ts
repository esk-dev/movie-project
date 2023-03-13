import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPosterComponent } from './item-poster.component';

describe('ItemPosterComponent', () => {
  let component: ItemPosterComponent;
  let fixture: ComponentFixture<ItemPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
