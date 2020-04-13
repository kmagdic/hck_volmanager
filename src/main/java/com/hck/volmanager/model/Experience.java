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
@Table(name = "experiences")
public class Experience {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "ordernum")
    private short orderNum;

    @ManyToMany(mappedBy = "experiences")
    private Set<Volunteer> volunteers = new HashSet<>();

    @Override
    public String toString() {
        return "Experience{" +
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

    public short getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(short orderNum) {
        this.orderNum = orderNum;
    }
}
