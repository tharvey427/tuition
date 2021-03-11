package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Grade;
import magic.ministry.mmtr.repositories.GradeRepository;
import magic.ministry.mmtr.services.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Set;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/grades")
public class GradeController {

    @Resource
    GradeService gs;

    @GetMapping()
    public Set<Grade> getGrades() {
        return gs.getAllGrades();
    }
}
