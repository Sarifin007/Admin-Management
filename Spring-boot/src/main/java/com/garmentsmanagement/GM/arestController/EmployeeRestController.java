package com.garmentsmanagement.GM.arestController;

import com.garmentsmanagement.GM.entity.employeeEntity.Department;
import com.garmentsmanagement.GM.entity.employeeEntity.Designation;
import com.garmentsmanagement.GM.entity.employeeEntity.SalaryGrade;
import com.garmentsmanagement.GM.service.employeeService.DeptService;
import com.garmentsmanagement.GM.utility.EmployeeUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping(value = "emp/api")
@RestController
public class EmployeeRestController {

    @Autowired
    DeptService deptService;

    @Autowired
    EmployeeUtility employeeUtility;

//    Get All Department

    @RequestMapping(value = "/getDept")
    public List<Department> findAllDept(){
        return deptService.findAllDept();
    }

//    Get All Salary Grade

    @RequestMapping(value = "/get_salary_g")
    public List<SalaryGrade> findAllSalaryGrade(){
    return deptService.fildAllSalaryDrade();
    }

//    Save and Update New Salary Grade

    @RequestMapping(value = "/save_salary_grade")
    public void createNewSalaryG(@RequestBody SalaryGrade sg){
        employeeUtility.setSalryExtension(sg);
        deptService.saveSalaryGrade(sg);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/delete_sg/{id}")
    public void deleteSG(@RequestParam long id){
        deptService.deleteSg(id);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/find_id/{id}")
    public List<SalaryGrade> sgUpdate(@RequestParam long id){
        return deptService.findSgById(id);
    }
}
