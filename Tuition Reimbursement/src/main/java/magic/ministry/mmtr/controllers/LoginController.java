package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import magic.ministry.mmtr.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials = "true")
//@CrossOrigin(origins = "*", allowCredentials = "true")
@RequestMapping(path = "/login")
public class LoginController {

    @Autowired
    EmployeeService es;

    @Autowired
    EmployeeRepository er;

    @PostMapping()
    public Employee login(String username, String password) {
        Employee employee;
        employee = er.findByUsernameAndPassword(username, password);
        return employee;
    }
}
