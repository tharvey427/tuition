package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Grade;
import magic.ministry.mmtr.repositories.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class GradeImpl implements GradeService{

    @Autowired
    private GradeRepository gr;

    @Override
    public Set<Grade> getAllGrades() {
        Set<Grade> grades = new HashSet<>();
        gr.findAll().forEach(grades::add);
        return grades;
    }
}
