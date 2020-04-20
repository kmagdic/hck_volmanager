package com.hck.volmanager.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * 	id bigserial,
 * 	name text not null,
 * 	ordernum int2,
 */

@Entity
@Table(name = "skills")
public class Skill {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "ordernum")
    private Short orderNum;

    @ManyToMany(mappedBy = "skills")
    private Set<Volunteer> volunteers = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "groupid")
    private SkillGroup skillGroup;

    @Override
    public String toString() {
        return "Skill{" +
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

    public SkillGroup getSkillGroup() {
        return skillGroup;
    }

    public void setSkillGroup(SkillGroup skillGroup) {
        this.skillGroup = skillGroup;
    }
}
