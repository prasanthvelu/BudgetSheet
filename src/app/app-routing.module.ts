import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseAddedComponent } from './expense-added/expense-added.component';
import { HomeComponent } from './home/home.component';
import { AddSheetComponent } from './add-sheet/add-sheet.component';
import { SheetListComponent } from './sheet-list/sheet-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'create-sheet', component: AddSheetComponent},
  {path: 'sheet-list', component: HomeComponent},
  {path: 'update-sheet', component: AddSheetComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
