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

//    @Column(name = "department_id")
//    private Integer departmentId;

    //            (fetch = FetchType.LAZY)
    @ManyToOne
    @JoinColumn(name = "fk_emp_dept")
    private Department department;

    public Employee() {
    }

    public Employee(Integer employeeid, String first, String last, String username, String password, Integer supervisorid, Integer departmentId, Department department) {
        this.employeeid = employeeid;
        this.first = first;
        this.last = last;
        this.username = username;
        this.password = password;
        this.supervisorid = supervisorid;
//        this.departmentId = departmentId;
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

//    public Integer getdepartmentId() {
//        return departmentId;
//    }
//
//    public void setdepartmentId(Integer departmentId) {
//        this.departmentId = departmentId;
//    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
