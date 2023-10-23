import { Injectable } from '@angular/core';
import { BudgetSheet } from '../models/budget-sheet.model';
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetSheetService {

  constructor() { }

  private addingExpense = new ReplaySubject<Expense>(1)
  private budgetSheetList = new BehaviorSubject([])

  budgetSheet: BudgetSheet[] = JSON.parse(localStorage.getItem('budgetSheet') || "[]")
  budgetSheetData: BudgetSheet[] = []
  // isDateExist!: number
  // isDateExist_2!: number
  sheet(sheetFormData: Partial<{ date: string | null; note: string | null; amount: number | null; index: number | null; }>, status: string) {
    const isDateExist = this.budgetSheet.findIndex((el) => {
      return el.date === sheetFormData.date
    })

    if (isDateExist >= 0) {
      if (status === "add") {
        this.budgetSheet[isDateExist].expense.push({
          note: sheetFormData.note!,
          amount: Number(sheetFormData.amount!)
        })
      } else if (status === "update") {
        this.budgetSheet[isDateExist].expense[sheetFormData.index!] = {
          note: sheetFormData.note!,
          amount: Number(sheetFormData.amount!)
        }
      }else if (status === "delete") {
        this.budgetSheet[isDateExist].expense.splice(sheetFormData.index!, 1)
      }
    } else {
      this.budgetSheet.push({
        date: sheetFormData.date!,
        expense: [{
          note: sheetFormData.note!,
          amount: Number(sheetFormData.amount!)
        }]
      })
    }
    localStorage.setItem('budgetSheet', JSON.stringify(this.budgetSheet))
    this.budgetSheetData = JSON.parse(localStorage.getItem('budgetSheet') || "[]")
    const isDateExist_2 = this.budgetSheetData.findIndex((el) => {
      return el.date === sheetFormData.date
    })
    this.addingExpense.next(JSON.parse(localStorage.getItem('budgetSheet') || "[]")[isDateExist_2])
  }

  getSheet = this.addingExpense.asObservable()

  deleteSheetList(index: number){
    this.budgetSheet.splice(index, 1)
    localStorage.setItem('budgetSheet', JSON.stringify(this.budgetSheet))
    this.budgetSheetList.next(JSON.parse(localStorage.getItem('budgetSheet') || "[]"))
  }

  getSheetList = this.budgetSheetList.asObservable()
}
