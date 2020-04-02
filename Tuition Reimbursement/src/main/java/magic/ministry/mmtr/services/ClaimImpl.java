package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.ClaimRepository;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClaimImpl implements ClaimService {

    @Autowired
    ClaimRepository cr;

    @Autowired
    EmployeeRepository er;

    @Override
    public Set<Claim> getAllClaims() {
        Set<Claim> claims = new HashSet<>();
        cr.findAll().forEach(claims::add);
        return claims;
    }

    @Override
    public Claim addClaim(Claim claim) {
        claim = cr.save(claim);
        return claim;
    }

    @Override
    public Claim updateClaim(Claim claim) {
        claim = cr.save(claim);
        return claim;
    }

    @Override
    public List<Claim> findClaimByEmployee(Employee employee) {
        return cr.findByEmployee(employee);
    }

}
