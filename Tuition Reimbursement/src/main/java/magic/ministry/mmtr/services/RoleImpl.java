package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Role;
import magic.ministry.mmtr.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class RoleImpl implements RoleService {

    @Autowired
    public RoleRepository rr;

    @Override
    public Set<Role> getAllRoles() {
        Set<Role> roles = new HashSet<>();
        rr.findAll().forEach(roles::add);
        return roles;
    }
}
