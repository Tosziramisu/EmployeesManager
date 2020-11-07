package com.crud.employees.controller;

import com.crud.employees.model.Employee;
import com.crud.employees.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.GET, value = "employees")
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAllEmployees();
    }

    @RequestMapping(method = RequestMethod.POST, value = "employees")
    public void createEmployee(@RequestBody Employee employee)
    {
        employeeService.createEmployee(employee);
    }

    @RequestMapping(method = RequestMethod.GET, value = "employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "employees/{id}")
    public void updateEmployee(@PathVariable Long id, @RequestBody Employee employee)
    {
        employeeService.updateEmployee(id, employee);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "employees/{id}")
    public void deleteEmployee(@PathVariable Long id)
    {
        employeeService.deleteEmployee(id);
    }
}
