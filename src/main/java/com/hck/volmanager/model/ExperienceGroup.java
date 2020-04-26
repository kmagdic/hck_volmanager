package com.hck.volmanager.model;

import javax.persistence.*;

/**
 * 	id bigserial NOT NULL,
 * 	"name" text NOT NULL,
 * 	ordernum int2 NULL,
 */

@Entity
@Table(name = "experiencegroups")
public class ExperienceGroup {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "ordernum")
    private Short orderNum;

    /*
    @OneToMany
    @JoinTable(name = "skills")
    @JoinColumn(name = "groupid")
    private Set<Qualification> qualifications;
    */

    @Override
    public String toString() {
        return "ExperienceGroup{" +
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
}
