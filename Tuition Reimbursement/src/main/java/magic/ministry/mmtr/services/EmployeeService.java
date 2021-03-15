package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.entities.Employee;

import java.util.Map;
import java.util.Set;


public interface EmployeeService {

    Employee newEmployee(Employee employee);

    Employee login(String username, String password);

    Employee findEmployeeById(int id);

    Employee updateEmployee(Employee employee);

    Set<Employee> getAllEmployees();

    Map<Department, Integer> getEmployeesByDepartment(Department department);

    Map<Employee, Integer> getEmployeesBySupervisor(Set<Employee> supervisor);

    void removeEmployee(Employee employee);
}
