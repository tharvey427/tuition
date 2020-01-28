package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepository extends JpaRepository<Grade, Integer> {
}
