package com.hck.volmanager.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 	volunteerId int8,
 * 	item int2 not null,
 * 	name text not null,
 */

@Entity
@Table(name = "vcustomskills")
public class CustomSkill implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn(name = "volunteerid", referencedColumnName = "id")
    private Volunteer volunteer;

    @Id
    @Column(name = "item")
    private short item;

    @Column(name = "name")
    private String name;

    @Override
    public String toString() {
        return "CustomSkill{" +
                "volunteer=" + volunteer +
                ", item='" + item + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    // Setters and getters
    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public short getItem() {
        return item;
    }

    public void setItem(short item) {
        this.item = item;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
