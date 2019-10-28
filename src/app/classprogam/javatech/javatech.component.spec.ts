import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavatechComponent } from './javatech.component';

describe('JavatechComponent', () => {
  let component: JavatechComponent;
  let fixture: ComponentFixture<JavatechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavatechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavatechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
