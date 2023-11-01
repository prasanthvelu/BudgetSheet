import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BudgetSheetService } from "../services/budget-sheet.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sheet',
  templateUrl: './add-sheet.component.html',
  styleUrls: ['./add-sheet.component.css']
})
export class AddSheetComponent {
  tableShow = false
  sheetForm = new FormGroup({
    date: new FormControl(''),
    note: new FormControl(''),
    amount: new FormControl()
  });

  constructor(private budgetSheetService: BudgetSheetService, private router: Router){

  }

  budgetSheetList(){
    this.router.navigate([''])
  }

  onSubmit() {
    this.budgetSheetService.sheetAddClicked = true
    this.budgetSheetService.sheet(this.sheetForm.value, "add")
  }
}

