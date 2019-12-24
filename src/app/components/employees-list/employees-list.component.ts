import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Empdata } from 'src/app/models/employee.model';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {

  constructor(private employeeServices: EmployeeService) { }
  empDetails: Observable<any>;

  // dataSource: MatTableDataSource;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Empdata>();
  currentPage: any;
  obs: any;

  // createComponent = new FormGroup({
  //   name: new.FormControl(''),
  //   body: new.FormControl(''),
  //   email: new.FormControl('')
  // });

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


  onSubmit(){
    console.log(this.createComponent.value);
  }

}

