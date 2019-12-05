package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employeeid;

    private String first;
    private String last;
    private String username;
    private String password;
    private Integer supervisorid;

    // Multiple employees can be in one department
    @ManyToOne
    @JoinColumn(name = "department_id") //the name of the foreign key column in table
    private Department department; // using an object instead of just an integer to have all associated content

    public Employee() {
    }

    public Employee(Integer employeeid, String first, String last, String username, String password, Integer supervisorid, Department department) {
        this.employeeid = employeeid;
        this.first = first;
        this.last = last;
        this.username = username;
        this.password = password;
        this.supervisorid = supervisorid;
        this.department = department;
    }

    public Integer getEmployeeid() {
        return employeeid;
    }

    public void setEmployeeid(Integer employeeid) {
        this.employeeid = employeeid;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getsupervisorid() {
        return supervisorid;
    }

    public void setsupervisorid(Integer supervisorid) {
        this.supervisorid = supervisorid;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
