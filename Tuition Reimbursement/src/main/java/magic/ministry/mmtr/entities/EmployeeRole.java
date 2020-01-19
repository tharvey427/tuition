package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
@Table(name = "emp_role")
public class EmployeeRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "emp_role_id")
    private Integer id;

    @JoinColumn(name = "employee_id")
    private Integer employeeId;

    @JoinColumn(name = "role_id")
    private Integer roleId;

    public EmployeeRole() {
    }

    public EmployeeRole(Integer id, Integer employeeId, Integer roleId) {
        this.id = id;
        this.employeeId = employeeId;
        this.roleId = roleId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        return "EmployeeRole{" +
                "id=" + id +
                ", employeeId=" + employeeId +
                ", roleId=" + roleId +
                '}';
    }
}
