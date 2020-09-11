package com.hck.volmanager.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "availabilities")
public class Availability implements Serializable {

    @Id
    @Column(name = "volunteerid")
    private Long vid;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="volunteerid", unique = true)
    @MapsId
    private Volunteer volunteer;

    @Column(name = "mondayfrom")
    Short mondayFrom;

    @Column(name = "mondayto")
    Short mondayTo;

    @Column(name = "tuesdayfrom")
    Short tuesdayFrom;

    @Column(name = "tuesdayto")
    Short tuesdayTo;

    @Column(name = "wednesdayfrom")
    Short wednesdayFrom;

    @Column(name = "wednesdayto")
    Short wednesdayTo;

    @Column(name = "thursdayfrom")
    Short thursdayFrom;

    @Column(name = "thursdayto")
    Short thursdayTo;

    @Column(name = "fridayfrom")
    Short fridayFrom;

    @Column(name = "fridayto")
    Short fridayTo;

    @Column(name = "saturdayfrom")
    Short saturdayFrom;

    @Column(name = "saturdayto")
    Short saturdayTo;

    @Column(name = "sundayfrom")
    Short sundayFrom;

    @Column(name = "sundayto")
    Short sundayTo;

    public Availability() {
    }
/*
    public Availability(Volunteer volunteer) {
        this.volunteer = volunteer;
    }
*/
    public Short getMondayFrom() {
        return mondayFrom;
    }

    public void setMondayFrom(Short mondayFrom) {
        this.mondayFrom = mondayFrom;
    }

    public Short getMondayTo() {
        return mondayTo;
    }

    public void setMondayTo(Short mondayTo) {
        this.mondayTo = mondayTo;
    }

    public Short getTuesdayFrom() {
        return tuesdayFrom;
    }

    public void setTuesdayFrom(Short tuesdayFrom) {
        this.tuesdayFrom = tuesdayFrom;
    }

    public Short getTuesdayTo() {
        return tuesdayTo;
    }

    public void setTuesdayTo(Short tuesdayTo) {
        this.tuesdayTo = tuesdayTo;
    }

    public Short getWednesdayFrom() {
        return wednesdayFrom;
    }

    public void setWednesdayFrom(Short wednesdayFrom) {
        this.wednesdayFrom = wednesdayFrom;
    }

    public Short getWednesdayTo() {
        return wednesdayTo;
    }

    public void setWednesdayTo(Short wednesdayTo) {
        this.wednesdayTo = wednesdayTo;
    }

    public Short getThursdayFrom() {
        return thursdayFrom;
    }

    public void setThursdayFrom(Short thursdayFrom) {
        this.thursdayFrom = thursdayFrom;
    }

    public Short getThursdayTo() {
        return thursdayTo;
    }

    public void setThursdayTo(Short thursdayTo) {
        this.thursdayTo = thursdayTo;
    }

    public Short getFridayFrom() {
        return fridayFrom;
    }

    public void setFridayFrom(Short fridayFrom) {
        this.fridayFrom = fridayFrom;
    }

    public Short getFridayTo() {
        return fridayTo;
    }

    public void setFridayTo(Short fridayTo) {
        this.fridayTo = fridayTo;
    }

    public Short getSaturdayFrom() {
        return saturdayFrom;
    }

    public void setSaturdayFrom(Short saturdayFrom) {
        this.saturdayFrom = saturdayFrom;
    }

    public Short getSaturdayTo() {
        return saturdayTo;
    }

    public void setSaturdayTo(Short saturdayTo) {
        this.saturdayTo = saturdayTo;
    }

    public Short getSundayFrom() {
        return sundayFrom;
    }

    public void setSundayFrom(Short sundayFrom) {
        this.sundayFrom = sundayFrom;
    }

    public Short getSundayTo() {
        return sundayTo;
    }

    public void setSundayTo(Short sundayTo) {
        this.sundayTo = sundayTo;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    /*
    public Volunteer getVolunteer() {
        return volunteer;
    }*/
}
