package base_package.dao.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;


@Embeddable
public class NotePrimaryKey implements Serializable {



    private String day;
    private String time;

    public NotePrimaryKey(){

    }
    public NotePrimaryKey(String day, String time) {
        this.day = day;
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
