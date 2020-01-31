package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface GradeRepository extends CrudRepository<Grade, Integer> {
}
