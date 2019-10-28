import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlsonComponent } from './studentlson.component';

describe('StudentlsonComponent', () => {
  let component: StudentlsonComponent;
  let fixture: ComponentFixture<StudentlsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
