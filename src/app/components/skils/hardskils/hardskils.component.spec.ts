import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardskilsComponent } from './hardskils.component';

describe('HardskilsComponent', () => {
  let component: HardskilsComponent;
  let fixture: ComponentFixture<HardskilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardskilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
