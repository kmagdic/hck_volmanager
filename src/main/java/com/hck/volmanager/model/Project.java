package com.hck.volmanager.model;

import javax.persistence.*;

public class Project {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Column(name = "name")
    private String name;

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
