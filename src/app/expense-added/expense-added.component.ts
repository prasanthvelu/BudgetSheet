import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BudgetSheetService } from '../services/budget-sheet.service';
import { Expense } from '../models/expense.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-added',
  templateUrl: './expense-added.component.html',
  styleUrls: ['./expense-added.component.css']
})
export class ExpenseAddedComponent implements OnInit {
  tableShow: boolean = false
  @Input() expense: Expense

  constructor(private budgetSheetService: BudgetSheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.budgetSheetService.sheetAddClicked = false
    /* this.budgetSheetService.getSheet.subscribe(data => {
      if (this.budgetSheetService.sheetAddClicked) {
        this.expense = data
        if (this.expense.expense.length > 0) {
          this.tableShow = true
        } else {
          this.tableShow = false
        }
      }
    }) */
    if (this.route.snapshot.paramMap.get('id') != null) {
      const editSheetId = Number(this.route.snapshot.paramMap.get('id'))
      this.expense = JSON.parse(localStorage.getItem('budgetSheet') || "[]")[editSheetId]
      this.tableShow = true
    }
  }

  isEditing: boolean = false
  selectedRow!: number
  edit(i: number) {
    this.isEditing = true
    this.selectedRow = i
  }

  @ViewChild('note') note!: ElementRef;
  @ViewChild('amount') amount!: ElementRef;
  update(i: number) {
    this.isEditing = false
    this.budgetSheetService.sheet({ date: this.expense.date, note: this.note.nativeElement.value, amount: this.amount.nativeElement.value, index: i }, "update")
  }

  delete(i: number) {
    this.budgetSheetService.sheet({ date: this.expense.date, index: i }, "delete")
  }
}
