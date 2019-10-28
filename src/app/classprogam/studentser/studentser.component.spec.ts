import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentserComponent } from './studentser.component';

describe('StudentserComponent', () => {
  let component: StudentserComponent;
  let fixture: ComponentFixture<StudentserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
