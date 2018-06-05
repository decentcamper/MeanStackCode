import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveDrivenComponent } from './form-reactive-driven.component';

describe('FormReactiveDrivenComponent', () => {
  let component: FormReactiveDrivenComponent;
  let fixture: ComponentFixture<FormReactiveDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
