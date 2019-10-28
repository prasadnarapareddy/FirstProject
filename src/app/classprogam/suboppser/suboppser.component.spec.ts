import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuboppserComponent } from './suboppser.component';

describe('SuboppserComponent', () => {
  let component: SuboppserComponent;
  let fixture: ComponentFixture<SuboppserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuboppserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuboppserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
