package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import magic.ministry.mmtr.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

//@CrossOrigin(origins = "*", allowCredentials = "true")
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService es;

    @Autowired
    private EmployeeRepository er;

    @GetMapping()
    public Set<Employee> getEmployees() {
        return es.getAllEmployees();
    }

    @GetMapping(path = "/all") //this does the same as the emp service getEmployees method above
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        return er.findAll();
    }

    @GetMapping(value = "{id}")
    public Employee getEmployee(@PathVariable Integer id) {
        return es.findEmployeeById(id);
    }

    @PostMapping(value = "/add")
    public Employee addEmployee(@RequestBody Employee employee) {
        return es.newEmployee(employee);
    }
}
