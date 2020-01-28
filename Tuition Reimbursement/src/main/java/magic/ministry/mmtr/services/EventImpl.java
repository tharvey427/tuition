package magic.ministry.mmtr.services;

import magic.ministry.mmtr.entities.Event;
import magic.ministry.mmtr.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class EventImpl implements EventService{

    @Autowired
    EventRepository er;

    @Override
    public Set<Event> getAllEvents() {
        Set<Event> events = new HashSet<>();
        er.findAll().forEach(events::add);
        return events;
    }
}
