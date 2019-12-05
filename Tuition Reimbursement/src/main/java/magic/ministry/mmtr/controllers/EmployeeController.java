package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "*", allowCredentials = "true")
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository er;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        return er.findAll();
    }
}
