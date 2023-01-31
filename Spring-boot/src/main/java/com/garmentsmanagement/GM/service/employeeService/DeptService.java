package com.garmentsmanagement.GM.service.employeeService;

import com.garmentsmanagement.GM.entity.employeeEntity.Department;
import com.garmentsmanagement.GM.entity.employeeEntity.Designation;
import com.garmentsmanagement.GM.entity.employeeEntity.SalaryGrade;
import com.garmentsmanagement.GM.repository.EmployeeRepository.DepRepo;
import com.garmentsmanagement.GM.repository.EmployeeRepository.DesignationRepo;
import com.garmentsmanagement.GM.repository.EmployeeRepository.SalaryGradeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DeptService {

    @Autowired
    DepRepo deptRepo;

    @Autowired
    DesignationRepo desigRepo;

    @Autowired
    SalaryGradeRepo salaryGradeRepo;

    public List<Department> findAllDept(){ return deptRepo.findAll();}

//
    public List<SalaryGrade> fildAllSalaryDrade(){
        return salaryGradeRepo.findAll();
    }

    public void saveDesig(Designation dg){desigRepo.save(dg);}

//    Create New Salary grade
    public void saveSalaryGrade(SalaryGrade sg){
        salaryGradeRepo.save(sg);
    }

//    Delete Salary Grade
    public void deleteSg(long id){
        salaryGradeRepo.deleteById(id);
    }

    public List<SalaryGrade> findSgById(long id){
        List<SalaryGrade>  list= salaryGradeRepo.findById(id).stream().toList();
        return list;
    }
}


