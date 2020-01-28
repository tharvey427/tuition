package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Claim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Integer> {

    Claim findByClaimId(int id);

    Set<Claim> findByEmployee(int id);

    Set<Claim> findByEvent(int id);

    //find claim by role?
}
