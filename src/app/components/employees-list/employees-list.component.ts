import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Empdata } from 'src/app/models/employee.model';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
  empDetails: Observable<any>;

  // dataSource: MatTableDataSource;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Empdata>();
  currentPage: any;
  obs: any;
  constructor(private employeeServices: EmployeeService) { }

  ngOnInit() {
    this.employeeServices.getEmpData().subscribe(result => {
      this.obs = result;
      this.dataSource.data = this.obs;
      this.empDetails = this.dataSource.connect();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

