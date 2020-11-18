import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimsComponent } from './employee-claims.component';

describe('EmployeeClaimsComponent', () => {
  let component: EmployeeClaimsComponent;
  let fixture: ComponentFixture<EmployeeClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
