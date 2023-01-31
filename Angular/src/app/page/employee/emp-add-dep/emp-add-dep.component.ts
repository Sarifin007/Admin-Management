import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../../services/employee-service.service";
import {Department} from "../../../model/employees/department.model";

@Component({
  selector: 'app-emp-add-dep',
  templateUrl: './emp-add-dep.component.html',
  styleUrls: ['./emp-add-dep.component.css']
})
export class EmpAddDepComponent implements OnInit {

  constructor(private deptService: EmployeeServiceService) { }

  id?: any;
  department?: Department[];

  ngOnInit(): void {
    this.retriveDeptment();
    
  }


  xx(value:any){
    this.id = value;
    console.log(this.id)
  }

  retriveDeptment(): void {
    this.deptService.getAllDeprt()
      .subscribe({
        next: (data) => {
            this.department = data;
        },
        error: (e) => console.error(e)
      })
  }

}
