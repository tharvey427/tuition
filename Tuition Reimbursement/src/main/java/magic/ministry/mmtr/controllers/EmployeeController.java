package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Employee;
import magic.ministry.mmtr.repositories.EmployeeRepository;
import magic.ministry.mmtr.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;

//@CrossOrigin(origins = "*", allowCredentials = "true")
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/employees")
public class EmployeeController {

    @Resource
    private EmployeeService employeeService;

    @Resource
    private EmployeeRepository er;

    @GetMapping()
    public Set<Employee> getEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping(path = "/all") //this does the same as the emp service getEmployees method above
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        return er.findAll();
    }

    @GetMapping(value = "{id}")
    public Employee getEmployee(@PathVariable Integer id) {
        return employeeService.findEmployeeById(id);
    }

//    @GetMapping(value = "/{id}/supervisor")
//    public List<Employee> getEmployeesBySupervisor(@PathVariable Integer id) {
//        return es.getEmployeesBySupervisor()
//    }

    @PostMapping(value = "/add")
    public Employee addEmployee(@RequestBody Employee employee) {
        employee = employeeService.newEmployee(employee);
        return employeeService.newEmployee(employee);
    }
}
