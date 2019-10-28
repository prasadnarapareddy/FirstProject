import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofstujsonComponent } from './listofstujson.component';

describe('ListofstujsonComponent', () => {
  let component: ListofstujsonComponent;
  let fixture: ComponentFixture<ListofstujsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofstujsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofstujsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
