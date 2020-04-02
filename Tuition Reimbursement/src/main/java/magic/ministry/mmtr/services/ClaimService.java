package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Employee;

import java.util.List;
import java.util.Set;

public interface ClaimService {

    public Set<Claim> getAllClaims();

    public Claim addClaim(Claim claim);

    public Claim updateClaim(Claim claim);

    public List<Claim> findClaimByEmployee(Employee employee);
}
