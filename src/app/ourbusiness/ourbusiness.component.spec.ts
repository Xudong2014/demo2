import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbusinessComponent } from './ourbusiness.component';

describe('OurbusinessComponent', () => {
  let component: OurbusinessComponent;
  let fixture: ComponentFixture<OurbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
