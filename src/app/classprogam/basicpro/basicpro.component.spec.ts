import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicproComponent } from './basicpro.component';

describe('BasicproComponent', () => {
  let component: BasicproComponent;
  let fixture: ComponentFixture<BasicproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
