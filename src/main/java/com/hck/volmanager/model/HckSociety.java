package com.hck.volmanager.model;

import javax.persistence.*;
import java.util.Set;

/**
 * id bigserial,
 * name text not null,
 * type text not null,
 */

@Entity
@Table(name = "hcksociety")
public class HckSociety {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "ordernum")
    private short orderNum;

    @OneToMany
    @JoinColumn(name="hcksocietyid")
    private Set<Place> places;

    @Override
    public String toString() {
        return "HckSociety{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public short getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(short orderNum) {
        this.orderNum = orderNum;
    }
}
