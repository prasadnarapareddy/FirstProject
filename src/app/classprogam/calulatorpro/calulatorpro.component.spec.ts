import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorproComponent } from './calulatorpro.component';

describe('CalulatorproComponent', () => {
  let component: CalulatorproComponent;
  let fixture: ComponentFixture<CalulatorproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalulatorproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalulatorproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
