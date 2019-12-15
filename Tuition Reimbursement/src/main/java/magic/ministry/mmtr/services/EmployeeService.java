package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.entities.Employee;

import java.util.Map;
import java.util.Set;

public interface EmployeeService {

    public Employee newEmployee(Employee employee);

    public Employee findEmployeeById(int id);

    public Employee updateEmployee(Employee employee);

    public Set<Employee> getAllEmployees();

    public Map<Department, Integer> getEmployeesByDepartment(Department department);

    public Map<Employee, Integer> getEmployeesBySupervisor(Set<Employee> supervisor);

    public void removeEmployee(Employee employee);
}
