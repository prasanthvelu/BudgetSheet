import { TestBed } from '@angular/core/testing';

import { BudgetSheetService } from './budget-sheet.service';

describe('BudgetSheetService', () => {
  let service: BudgetSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
