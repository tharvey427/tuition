package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
@Table(name = "event_type")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "event_type_id")
    private Integer eventTypeId;

    private String eventName;

    private Double reimbursementPercentage;

    public Event() {
    }

    public Event(Integer eventTypeId, String eventName, Double reimbursementPercentage) {
        this.eventTypeId = eventTypeId;
        this.eventName  = eventName;
        this.reimbursementPercentage = reimbursementPercentage;
    }

    public Integer getEventTypeId() {
        return eventTypeId;
    }

    public void setEventTypeId(Integer eventTypeId) {
        this.eventTypeId = eventTypeId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Double getReimbursementPercentage() {
        return reimbursementPercentage;
    }

    public void setReimbursementPercentage(Double reimbursementPercentage) {
        this.reimbursementPercentage = reimbursementPercentage;
    }
}
