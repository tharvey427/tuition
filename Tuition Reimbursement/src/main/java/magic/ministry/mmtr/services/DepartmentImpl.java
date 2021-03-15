package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Department;
import magic.ministry.mmtr.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Set;

@Service
public class DepartmentImpl implements DepartmentService {

    @Resource
    DepartmentRepository dr;

    @Override
    public Set<Department> getAllDepartments() {
        Set<Department> departments = new HashSet<>();
        dr.findAll().forEach(departments::add);
        return departments;
    }
}
