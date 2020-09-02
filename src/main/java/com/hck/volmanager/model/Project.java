package com.hck.volmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Project {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Column
    private String name;

    @Column(name = "ordernum")
    private Short orderNum;

    private boolean enabled;

    public Project() {
    }

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

    public Short getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Short orderNum) {
        this.orderNum = orderNum;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
