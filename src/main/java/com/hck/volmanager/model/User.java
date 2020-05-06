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
@Table(name = "users")
public class User {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "pass")
    private String password;

    @Column(name = "salt")
    private String salt;

    @ManyToOne
    @JoinColumn(name="hcksocietyid")
    private HckSociety hckSociety;

    @Column(name="admin")
    private Boolean admin;

    @Column(name="enabled")
    private Boolean enabled;

    @Column(name="exportall")
    private Boolean exportAll;

    @Column(name="exportforcheck")
    private Boolean exportForCheck;

    @Column(name="changestatus")
    private Boolean changeStatus;

    @Column(name="changecheck")
    private Boolean changeCheck;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                '}';
    }

    // Setters and getters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public HckSociety getHckSociety() {
        return hckSociety;
    }

    public void setHckSociety(HckSociety hckSociety) {
        this.hckSociety = hckSociety;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Boolean getExportAll() {
        return exportAll;
    }

    public void setExportAll(Boolean exportAll) {
        this.exportAll = exportAll;
    }

    public Boolean getExportForCheck() {
        return exportForCheck;
    }

    public void setExportForCheck(Boolean exportForCheck) {
        this.exportForCheck = exportForCheck;
    }

    public Boolean getChangeStatus() {
        return changeStatus;
    }

    public void setChangeStatus(Boolean changeStatus) {
        this.changeStatus = changeStatus;
    }

    public Boolean getChangeCheck() {
        return changeCheck;
    }

    public void setChangeCheck(Boolean changeCheck) {
        this.changeCheck = changeCheck;
    }
}
