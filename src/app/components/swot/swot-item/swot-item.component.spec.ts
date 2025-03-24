import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwotItemComponent } from './swot-item.component';

describe('SwotItemComponent', () => {
  let component: SwotItemComponent;
  let fixture: ComponentFixture<SwotItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwotItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
