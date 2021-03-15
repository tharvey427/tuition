package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
// adding new employee crud > jpa
    Employee findByUsername (String username);

    Employee findByUsernameAndPassword (String username, String password);

    Set<Employee> findByDepartment(Department department);

    Set<Employee> findBySupervisor(Employee supervisor);

    //primitive int, not object
    Employee findById(int id);

    //debating
    Employee deleteById(int id);

    List<Claim> findEmployeeByEmployeeId(int id);
}
