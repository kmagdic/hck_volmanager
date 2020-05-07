package com.hck.volmanager.model;

import javax.persistence.*;


public class WebUser {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String username;

    private Boolean admin;

    private Boolean exportAll;

    private Boolean exportForCheck;

    private Boolean changeCheck;

    private Boolean changeStatus;

    private HckSociety hckSociety;



    private String hckSocietyName;

    public WebUser(User user) {
        mapFromUser(user);
    }
    public void mapFromUser(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.admin = user.getAdmin();
        this.exportAll = user.getExportAll();
        this.exportForCheck = user.getExportForCheck();
        this.changeCheck = user.getChangeCheck();
        this.changeStatus = user.getChangeStatus();
        this.hckSociety = user.getHckSociety();
        this.hckSocietyName = user.getHckSociety() != null ? user.getHckSociety().getName() : "";
    }

    @Override
    public String toString() {
        return "UserDTO{" +
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


    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
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

    public HckSociety getHckSociety() {
        return hckSociety;
    }

    public void setHckSociety(HckSociety hckSociety) {
        this.hckSociety = hckSociety;
    }

    public String getHckSocietyName() {
        return hckSocietyName;
    }

    public void setHckSocietyName(String hckSocietyName) {
        this.hckSocietyName = hckSocietyName;
    }
}
