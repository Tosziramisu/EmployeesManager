package com.crud.employees.service;

import com.crud.employees.model.Employee;
import com.crud.employees.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }

    public void createEmployee(Employee employee)
    {
        employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Long id)
    {
        return employeeRepository.findById(id).get();
    }

    public void updateEmployee(Long id, Employee employee)
    {
        Employee newEmployee =  employeeRepository.findById(id).get();
        newEmployee.setFirstName(employee.getFirstName());
        newEmployee.setLastName(employee.getLastName());
        newEmployee.setEmailId(employee.getEmailId());
        employeeRepository.save(newEmployee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
