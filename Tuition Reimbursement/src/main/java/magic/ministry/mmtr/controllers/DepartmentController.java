package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository dr;

    @GetMapping//(path = "/all")
    public @ResponseBody Iterable<Department> getAllDepartments() {
        return dr.findAll();
    }
}
