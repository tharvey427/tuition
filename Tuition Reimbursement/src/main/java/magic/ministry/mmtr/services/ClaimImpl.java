package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.repositories.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ClaimImpl implements ClaimService {

    @Autowired
    ClaimRepository cr;

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

}
