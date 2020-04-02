package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Claim;
import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.ClaimRepository;
import magic.ministry.mmtr.services.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

    // this method can get all claims from one employee
    //even though both mappings have employee, employee is needed as path variable
    // first employee could be substituted
        @GetMapping(value = "/employee/{employee}")
//    @GetMapping(value = "/employee/{id}")
    public List<Claim> getClaimsByEmployee(@PathVariable Employee employee) {
        return cs.findClaimByEmployee(employee);
    }
}
