import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDurationsComponent } from './available-durations.component';

describe('AvailableDurationsComponent', () => {
  let component: AvailableDurationsComponent;
  let fixture: ComponentFixture<AvailableDurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableDurationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableDurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
