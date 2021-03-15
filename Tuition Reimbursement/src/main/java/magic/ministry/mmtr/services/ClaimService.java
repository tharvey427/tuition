package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Employee;

import java.util.List;
import java.util.Set;

public interface ClaimService {

    Set<Claim> getAllClaims();

    Claim addClaim(Claim claim);

    Claim updateClaim(Claim claim);

    List<Claim> findClaimByEmployee(Employee employee);
}
