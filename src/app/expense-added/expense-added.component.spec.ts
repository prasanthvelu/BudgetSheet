import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAddedComponent } from './expense-added.component';

describe('ExpenseAddedComponent', () => {
  let component: ExpenseAddedComponent;
  let fixture: ComponentFixture<ExpenseAddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseAddedComponent]
    });
    fixture = TestBed.createComponent(ExpenseAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
