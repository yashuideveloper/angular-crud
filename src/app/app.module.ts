import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeComponent } from './components/employees-list/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployessComponent } from './components/edit-employess/edit-employess.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeComponent,
    EditEmployessComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
