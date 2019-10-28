import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivoperserComponent } from './divoperser.component';

describe('DivoperserComponent', () => {
  let component: DivoperserComponent;
  let fixture: ComponentFixture<DivoperserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivoperserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivoperserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
