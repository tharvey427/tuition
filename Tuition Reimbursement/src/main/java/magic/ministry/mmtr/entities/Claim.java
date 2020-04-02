package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
@Table(name = "claims")
public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "claim_id")
    private Integer claimId;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @OneToOne
    @JoinColumn(name = "event_type_id")
    private Event event;

    @OneToOne
    @JoinColumn(name = "grade_format_id")
    private Grade grade;

    private String startDate;
    private String submissionDate;
    private String location;
    private String description;
    private String justification;
    private Float cost;

    public Claim() {
    }

    public Claim(Integer claimId, Employee employee, Event event, Grade grade,
                 String startDate, String submissionDate, String location,
                 String description, String justification, Float cost) {
        this.claimId = claimId;
        this.employee = employee;
        this.event = event;
        this.grade = grade;
        this.startDate = startDate;
        this.submissionDate = submissionDate;
        this.location = location;
        this.description = description;
        this.justification = justification;
        this.cost = cost;
    }

    public Integer getClaimId() {
        return claimId;
    }

    public void setClaimId(Integer claimId) {
        this.claimId = claimId;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(String submissionDate) {
        this.submissionDate = submissionDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJustification() {
        return justification;
    }

    public void setJustification(String justification) {
        this.justification = justification;
    }

    public Float getCost() {
        return cost;
    }

    public void setCost(Float cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Claim{" +
                "claimId=" + claimId +
                ", employee=" + employee +
                ", event=" + event +
                ", grade=" + grade +
                ", startDate='" + startDate + '\'' +
                ", submissionDate='" + submissionDate + '\'' +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", justification='" + justification + '\'' +
                ", cost=" + cost +
                '}';
    }
}
