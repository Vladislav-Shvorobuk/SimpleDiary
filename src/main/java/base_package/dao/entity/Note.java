package base_package.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "note_container")
@IdClass(NotePrimaryKey.class)
public class Note {

    @Id
    @Column(name = "_day")
    private String day;
    @Id
    @Column(name = "_time")
    private String time;
    @Column(name = "note")
    private String note;

    public Note(){
    }
    public Note (String day, String time, String note) {
        this.day = day;
        this.time = time;
        this.note = note;
    }

    public void setDay(String day) {
            this.day = day;
        }

    public void setTime(String time) {
            this.time = time;
        }

    public void setNote(String note) {
            this.note = note;
        }

    public String getDay() {
            return day;
        }

    public String getTime() {
            return time;
        }

    public String getNote() {
            return note;
        }

}


