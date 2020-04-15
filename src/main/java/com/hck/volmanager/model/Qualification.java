package com.hck.volmanager.model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * 	id bigserial,
 * 	name text not null,
 * 	ordernum int2,
 */

@Entity
@Table(name = "qualifications")
public class Qualification {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "ordernum")
    private Short orderNum;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "qualifications")
    private Set<Volunteer> volunteers = new HashSet<Volunteer>(0);

    public Set<Volunteer> getStocks() {
        return this.volunteers;
    }

    public void setStocks(Set<Volunteer> stocks) {
        this.volunteers = stocks;
    }

    public Qualification() {
    }

    public Qualification(Long id, String name, Short orderNum, Set<Volunteer> volunteers) {
        this.id = id;
        this.name = name;
        this.orderNum = orderNum;
        this.volunteers = volunteers;
    }
/*
    @OneToMany(mappedBy = "qualification")
    private Set<VolunteerQualification> volunteerQualifications;
    */
    /*
    @ManyToMany(mappedBy = "qualifications")
    private Set<Volunteer> volunteers = new HashSet<>();
    */

    /*
    @OneToMany
    private Set<VolunteerQualification> volunteerQualification = new HashSet<>();
    */

    @Override
    public String toString() {
        return "Qualification{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    // Setters and getters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Short getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Short orderNum) {
        this.orderNum = orderNum;
    }

    /*

    public Set<Volunteer> getVolunteers() {
        return volunteers;
    }

    public void setVolunteers(Set<Volunteer> volunteers) {
        this.volunteers = volunteers;
    }

     */
}
