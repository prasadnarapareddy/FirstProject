import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prasad2Component } from './prasad2.component';

describe('Prasad2Component', () => {
  let component: Prasad2Component;
  let fixture: ComponentFixture<Prasad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prasad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prasad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
