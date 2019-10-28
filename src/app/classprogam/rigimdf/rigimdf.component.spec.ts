import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigimdfComponent } from './rigimdf.component';

describe('RigimdfComponent', () => {
  let component: RigimdfComponent;
  let fixture: ComponentFixture<RigimdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigimdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigimdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
