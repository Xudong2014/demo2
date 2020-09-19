import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprocessComponent } from './ourprocess.component';

describe('OurprocessComponent', () => {
  let component: OurprocessComponent;
  let fixture: ComponentFixture<OurprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
