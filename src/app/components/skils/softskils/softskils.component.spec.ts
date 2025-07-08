import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskilsComponent } from './softskils.component';

describe('SoftskilsComponent', () => {
  let component: SoftskilsComponent;
  let fixture: ComponentFixture<SoftskilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftskilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
