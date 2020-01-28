package magic.ministry.mmtr.entities;

import javax.persistence.*;

@Entity
@Table(name = "grade_format")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer gradeFormatId;

    private String gradeFormat;

    public Grade() {
    }

    public Grade(Integer gradeFormatId, String gradeFormat) {
        this.gradeFormatId = gradeFormatId;
        this.gradeFormat = gradeFormat;
    }

    public Integer getGradeFormatId() {
        return gradeFormatId;
    }

    public void setGradeFormatId(Integer gradeFormatId) {
        this.gradeFormatId = gradeFormatId;
    }

    public String getGradeFormat() {
        return gradeFormat;
    }

    public void setGradeFormat(String gradeFormat) {
        this.gradeFormat = gradeFormat;
    }
}
