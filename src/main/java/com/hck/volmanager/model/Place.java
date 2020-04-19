package com.hck.volmanager.model;

import javax.persistence.*;
import javax.swing.text.StyleContext;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.time.Instant;

/**
 * 	id bigserial,
 * 	name text not null,
 * 	county text not null,
 * 	postcode int2 not null,
 * 	hckSocietyId int8 not null,
 */

@Entity
@Table(name = "places")
public class Place {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "county", columnDefinition="bpchar", length = 1)
    private String county;

    @Column(name = "postcode")
    private Integer postCode;

    /*
    @ManyToOne
    @JoinColumn(name="hcksocietyid")
    private HckSociety hckSociety;
    */

    @Override
    public String toString() {
        return "Place{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", county='" + county + '\'' +
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

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public Integer getPostCode() {
        return postCode;
    }

    public void setPostCode(Integer postCode) {
        this.postCode = postCode;
    }
/*
    public HckSociety getHckSociety() {
        return hckSociety;
    }

    public void setHckSociety(HckSociety hckSociety) {
        this.hckSociety = hckSociety;
    }
 */
}
