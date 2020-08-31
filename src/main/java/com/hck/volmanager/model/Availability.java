package com.hck.volmanager.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

public class Availability {
    @Id
    @OneToOne
    @JoinColumn(name = "volunteerid", referencedColumnName = "id")
    private Volunteer volunteer;

    Short mondayFrom;
    Short mondayTo;
    Short tuesdayFrom;
    Short tuesdayTo;
    Short wednesdayFrom;
    Short wednesdayTo;
    Short thursdayFrom;
    Short thursdayTo;
    Short fridayFrom;
    Short fridayTo;
    Short saturdayFrom;
    Short saturdayTo;
    Short sundayFrom;
    Short sundayTo;

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

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
}
