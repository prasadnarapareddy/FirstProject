import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfexamComponent } from './tdfexam.component';

describe('TdfexamComponent', () => {
  let component: TdfexamComponent;
  let fixture: ComponentFixture<TdfexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
