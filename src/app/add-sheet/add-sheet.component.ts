import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BudgetSheetService } from "../services/budget-sheet.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BudgetSheet } from '../models/budget-sheet.model';

@Component({
  selector: 'app-add-sheet',
  templateUrl: './add-sheet.component.html',
  styleUrls: ['./add-sheet.component.css']
})
export class AddSheetComponent implements OnInit {
  budgetSheetListMenu = false

  sheetForm = new FormGroup({
    date: new FormControl(''),
    note: new FormControl(''),
    amount: new FormControl()
  });

  createUpdate:string = "Create"

  constructor(private budgetSheetService: BudgetSheetService, private router: Router, private route: ActivatedRoute,private datePipe: DatePipe){

  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.createUpdate = "Update"
      const editSheetId = Number(this.route.snapshot.paramMap.get('id'))
      // console.log(JSON.parse(localStorage.getItem('budgetSheet') || "[]")[editSheetId])
      const toDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.sheetForm.patchValue({date:toDate})
      this.sheetForm.controls['date'].disable()
    }
  }

  budgetSheetList(){
    this.router.navigate(['sheet-list'])
  }

  onSubmit() {
    this.budgetSheetService.sheetAddClicked = true
    this.budgetSheetService.sheet(this.sheetForm.value, "add")
    /* this.budgetSheetService.getSheet.subscribe(data => {
      if(data){
        this.budgetSheetListMenu = true
      }
    }) */
    this.budgetSheetService.getSheetList.subscribe(data => {
      const i = data.findIndex(x => x.date ===this.sheetForm.value.date);
      this.router.navigate(['/update-sheet', { id: i }]);
     })
  }
}

