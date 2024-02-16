import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AddSheetComponent } from './add-sheet/add-sheet.component';
import { ExpenseAddedComponent } from './expense-added/expense-added.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddSheetComponent,
    ExpenseAddedComponent,
    SheetListComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
