import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, FormGroup, FormControl, NgForm} from "@angular/forms";
import {EmployeeServiceService} from "../../../services/employee-service.service";
import { SalaryGrade } from "../../../model/employees/salary-grade.model";
import {NgModule} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ApiRespons } from 'src/app/model/employees/api-respons';
import { Observable } from 'rxjs';
// import { ApiRespons } from 'src/app/model/employees/api-respons';

@Component({
  selector: 'app-emp-add-grade',
  templateUrl: './emp-add-grade.component.html',
  styleUrls: ['./emp-add-grade.component.css']
})
export class EmpAddGradeComponent implements OnInit {
  salaryG: SalaryGrade = new SalaryGrade();
  apir: ApiRespons = new ApiRespons();
  submited = false;
  salaryGList?: SalaryGrade[];
  status = false;
  sgform?: NgForm;

  constructor(
    private service: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getAllsg();
  }

  // Save new S G
  saveSG(sgForm: NgForm): void{
    this.service.createSG(this.salaryG).subscribe(
      result =>
      this.gotoUserList()
    )
    this.submited = true
    sgForm.reset();
    this.getAllsg();
    this.gotoUserList();
  }

  // After Save Rediract to this router
  gotoUserList() {
    this.router.navigate(['/emp_add_grade']);
  }

// Get All S G Record
  getAllsg(): void{
    this.service.getAllSalaryGrade().subscribe(
      result => this.salaryGList = result
    )
  }

  // Delete S G By Id
  deleteByID(id:any){
    this.service.deleteSg(id).subscribe(
      result => {
        this.status = true;
      }
    )

    console.log(this.status)
  }

  getById(id:any){
      this.service.findSgById(id).subscribe(
        result => {
          this.salaryG = result
          console.log(this.salaryG)
        }
      )
      // this.sgform.value({sg_name: this.salaryG.sg_name})
  }
}
