package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.entities.EmployeePrincipal;
import magic.ministry.mmtr.entities.Role;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
public class EmployeeDetailsService implements UserDetailsService {

    @Autowired
    EmployeeRepository er;

    @Override
//    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Employee employee = er.findByUsername(username);
        if(employee == null) {
            throw new UsernameNotFoundException(username);
        }
        return new EmployeePrincipal(employee);
    }
}
