import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeexeComponent } from './pipeexe.component';

describe('PipeexeComponent', () => {
  let component: PipeexeComponent;
  let fixture: ComponentFixture<PipeexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
