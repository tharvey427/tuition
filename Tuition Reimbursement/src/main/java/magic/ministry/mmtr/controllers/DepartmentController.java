package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/departments")
public class DepartmentController {

    @Autowired
    private DepartmentRepository dr;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Department> getAllDepartments() {
        return dr.findAll();
    }
}
