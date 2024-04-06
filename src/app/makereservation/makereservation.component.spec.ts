import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakereservationComponent } from './makereservation.component';

describe('MakereservationComponent', () => {
  let component: MakereservationComponent;
  let fixture: ComponentFixture<MakereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakereservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
