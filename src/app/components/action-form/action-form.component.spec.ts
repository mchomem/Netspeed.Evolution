import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFormComponent } from './action-form.component';

describe('ActionFormComponent', () => {
  let component: ActionFormComponent;
  let fixture: ComponentFixture<ActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
