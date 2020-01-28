package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.repositories.ClaimRepository;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import magic.ministry.mmtr.services.ClaimService;
import magic.ministry.mmtr.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/claims")
public class ClaimController {

    @Autowired
    ClaimService cs;

    @Autowired
    ClaimRepository cr;

    @GetMapping()
    public Set<Claim> getClaims() {
        return cs.getAllClaims();
    }

    @GetMapping(value = "/{id}")
    public Claim getClaim(@PathVariable Integer id) {
        return cr.findByClaimId(id);
    }
}
