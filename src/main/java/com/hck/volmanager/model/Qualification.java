package com.hck.volmanager.model;

import javax.persistence.*;

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

    /*
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "qualifications")
    private Set<Volunteer> volunteers = new HashSet<Volunteer>(0);

    public Set<Volunteer> getVolunteers() {
        return this.volunteers;
    }

    public void setVolunteers(Set<Volunteer> stocks) {
        this.volunteers = stocks;
    }
    */

    public Qualification() {
    }

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
