package magic.ministry.mmtr.repositories;

import magic.ministry.mmtr.entities.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {

    Event findById(int id);
}
