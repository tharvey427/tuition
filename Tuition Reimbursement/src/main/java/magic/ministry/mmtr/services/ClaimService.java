package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Claim;

import java.util.Set;

public interface ClaimService {

    public Set<Claim> getAllClaims();

    public Claim addClaim(Claim claim);

    public Claim updateClaim(Claim claim);
}
