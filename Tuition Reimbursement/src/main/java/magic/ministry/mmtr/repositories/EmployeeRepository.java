package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Employee findByUsername (String username);

    Set<Employee> findByDepartment(Department department);

    Set<Employee> findBySupervisor(Employee supervisor);

    //apparently needs a primitive int and object integer can't be used
    Employee findById(int id);

    //not sure if this one should be here
    Employee deleteById(int id);
}
