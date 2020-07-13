import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentP1Component } from './student-p1.component';

describe('StudentP1Component', () => {
  let component: StudentP1Component;
  let fixture: ComponentFixture<StudentP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
