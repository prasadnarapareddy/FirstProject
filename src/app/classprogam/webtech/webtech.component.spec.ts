import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtechComponent } from './webtech.component';

describe('WebtechComponent', () => {
  let component: WebtechComponent;
  let fixture: ComponentFixture<WebtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
