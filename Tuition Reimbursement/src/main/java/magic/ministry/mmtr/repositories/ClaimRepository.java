package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ClaimRepository extends CrudRepository<Claim, Integer> {

    Claim findByClaimId(int id);

    // find all claims by one employee
    // accesses the employee id in employee object
    List<Claim> findByEmployee(Employee employee);

    //find claim by role?
}
