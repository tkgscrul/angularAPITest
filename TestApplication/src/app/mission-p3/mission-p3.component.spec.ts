import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionP3Component } from './mission-p3.component';

describe('MissionP3Component', () => {
  let component: MissionP3Component;
  let fixture: ComponentFixture<MissionP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
