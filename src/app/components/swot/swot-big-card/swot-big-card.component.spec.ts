import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwotBigCardComponent } from './swot-big-card.component';

describe('SwotBigCardComponent', () => {
  let component: SwotBigCardComponent;
  let fixture: ComponentFixture<SwotBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwotBigCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwotBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
