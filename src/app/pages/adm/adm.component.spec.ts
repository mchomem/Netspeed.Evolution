import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmComponent } from './adm.component';

describe('AdmComponent', () => {
  let component: AdmComponent;
  let fixture: ComponentFixture<AdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
