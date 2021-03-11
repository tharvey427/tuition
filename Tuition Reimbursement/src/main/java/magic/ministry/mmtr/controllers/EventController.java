package magic.ministry.mmtr.controllers;

import magic.ministry.mmtr.entities.Event;
import magic.ministry.mmtr.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Set;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "/events")
public class EventController {

    @Resource
    EventService es;

    @GetMapping()
    public Set<Event> getEvents() {
        return es.getAllEvents();
    }
}
