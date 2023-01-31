import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Designation} from "../model/employees/designation.model";
import {Department} from "../model/employees/department.model";
import {SalaryGrade} from "../model/employees/salary-grade.model";
import { ApiRespons } from '../model/employees/api-respons';

const baseUrl = 'http://localhost:8181/emp/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' ,
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }


  // Create a constructor of imported file
  constructor(
    private http: HttpClient,
  ) { }

  // Get all Depart by Api
  getAllDeprt(): Observable<Department[]>{
    return this.http.get<Department[]>(baseUrl+"/getDept")
  }

  // Create New Salary Grade
  createSG(sg: SalaryGrade){
    return this.http.post(baseUrl+"/save_salary_grade", sg);
  }

  // Show All Salery Grade
  getAllSalaryGrade(): Observable<SalaryGrade[]>{
    return this.http.get<SalaryGrade[]>(baseUrl+'/get_salary_g')
  }

  // Delete Salery Grade by Id
  deleteSg(id: any): Observable<ApiRespons>{
     return this.http.delete<ApiRespons>(baseUrl+"/delete_sg/"+id);
  }

  findSgById(id: any): Observable<any>{
    return this.http.get(baseUrl+'/find_id/'+id)
  }

  // updateSg(id: any, sg: SalaryGrade): Observable<ApiRespons>{
  //   return this.http.put<ApiRespons>(baseUrl+"/save_salary_grade"", sg);
  // }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }



}
