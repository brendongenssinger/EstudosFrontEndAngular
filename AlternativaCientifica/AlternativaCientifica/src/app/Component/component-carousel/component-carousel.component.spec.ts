import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCarouselComponent } from './component-carousel.component';

describe('ComponentCarouselComponent', () => {
  let component: ComponentCarouselComponent;
  let fixture: ComponentFixture<ComponentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
