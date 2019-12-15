package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.*;

public class EmployeeImpl implements EmployeeService {

    @Autowired
    EmployeeRepository er;

    @Override
    public Employee newEmployee(Employee employee) {
        employee = er.save(employee);
        return employee;
    }

    @Override
    public Employee findEmployeeById(int id) {
        return er.findById(id);
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        return er.save(employee);
    }

    @Override
    public Set<Employee> getAllEmployees() {
        Set<Employee> employees= new HashSet<>();
        er.findAll();
//        er.findAll().forEach(employees::add);
        return employees;
    }

    @Override
    public Map<Department, Integer> getEmployeesByDepartment(Department department) {
        Map<Department, Integer> numList = new HashMap<>();
        ArrayList<Employee> all = (ArrayList<Employee>) er.findAll();

        for (Employee e : all) {
            if (numList.containsKey(e.getDepartment()))
                numList.put(e.getDepartment(), numList.get(e.getDepartment()) + 1);
            else numList.put((e.getDepartment()), 1);
        }
        return numList;
    }

    @Override
    public Map<Employee, Integer> getEmployeesBySupervisor(Set<Employee> supervisor) {
        Map<Employee, Integer> numList = new HashMap<>();

        for (Employee e : supervisor) {
            if (numList.containsKey((e.getSupervisor())))
                numList.put(e.getSupervisor(), numList.get(e.getSupervisor()) + 1);
            else
                numList.put(e.getSupervisor(), 1);
        }
        return numList;
    }

    @Override
    public void removeEmployee(Employee employee) {
        er.delete(employee);
    }
}
