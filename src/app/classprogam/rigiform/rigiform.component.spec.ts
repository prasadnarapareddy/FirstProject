import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigiformComponent } from './rigiform.component';

describe('RigiformComponent', () => {
  let component: RigiformComponent;
  let fixture: ComponentFixture<RigiformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigiformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
