package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Role;
import magic.ministry.mmtr.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Set;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/roles")
public class RoleController {

    @Resource
    private RoleService rs;

    @GetMapping()
    public Set<Role> getAllRoles() {
        return rs.getAllRoles();
    }
}
