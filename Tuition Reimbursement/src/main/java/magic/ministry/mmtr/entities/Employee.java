package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id")
    private Integer employeeId;

    @Column(name = "first_name")
    private String first;

    @Column(name = "last_name")
    private String last;

    private String username;
    private String password;

    @ManyToOne
    @JoinColumn(name = "supervisor_id")
    private Employee supervisor;

    // Multiple employees can be in one department
    @ManyToOne
    @JoinColumn(name = "department_id") //the name of the foreign key column in table
    private Department department; // using an object instead of just an integer to have all associated content

    public Employee() {
    }

    public Employee(Integer employeeId, String first, String last, String username, String password, Employee supervisor, Department department) {
        this.employeeId = employeeId;
        this.first = first;
        this.last = last;
        this.username = username;
        this.password = password;
        this.supervisor = supervisor;
        this.department = department;
    }

    public Employee getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Employee supervisor) {
        this.supervisor = supervisor;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
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

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
