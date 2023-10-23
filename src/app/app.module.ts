import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AddSheetComponent } from './add-sheet/add-sheet.component';
import { ExpenseAddedComponent } from './expense-added/expense-added.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSheetComponent,
    ExpenseAddedComponent,
    SheetListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
