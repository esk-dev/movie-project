import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;
  const expectedLink = { path: `/`, name: 'default' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    component.link = expectedLink;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
