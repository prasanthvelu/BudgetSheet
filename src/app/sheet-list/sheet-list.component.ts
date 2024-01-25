import { Component, Input } from '@angular/core';
import { BudgetSheet } from '../models/budget-sheet.model';
import { BudgetSheetService } from '../services/budget-sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet-list',
  templateUrl: './sheet-list.component.html',
  styleUrls: ['./sheet-list.component.css']
})
export class SheetListComponent {
 @Input() budgetSheetListData: BudgetSheet[] = [];

  constructor(private budgetSheetService: BudgetSheetService, private router: Router) {
    this.budgetSheetService.getSheetList.subscribe(data => {
     console.log(data);
     
    })
  }

  createBudgetSheet(){
    this.router.navigate(['/create-sheet']);
  }

  edit(i:number){
    this.router.navigate(['/update-sheet', { id: i }]);
  }

  delete(i:number){
    this.budgetSheetService.deleteSheetList(i)
  }

}
