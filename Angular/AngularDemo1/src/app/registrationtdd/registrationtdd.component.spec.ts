import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationtddComponent } from './registrationtdd.component';

describe('RegistrationtddComponent', () => {
  let component: RegistrationtddComponent;
  let fixture: ComponentFixture<RegistrationtddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationtddComponent]
    });
    fixture = TestBed.createComponent(RegistrationtddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
