package com.hck.volmanager.model;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * 	id bigserial,
 * 	firstName text not null,
 * 	lastName text not null,
 * 	dob date,
 * 	oib char(11),
 * 	gender char(1),
 * 	addressOfLiving text,
 * 	placeOfLivingId int8,
 * 	placeOfVolunteeringId int8,
 * 	phone text,
 * 	email text,
 * 	iceName text,
 * 	icePhone text,
 * 	consentProcessPersonalData bool,
 * 	householdElderly bool,
 * 	householdPregnantWomen bool,
 * 	pregnantWoman bool,
 * 	householdChild bool,
 * 	householdChronicPatient bool,
 * 	healthFine bool,
 * 	healthDetails text,
 * 	availabilityHoursWeekly int2,
 * 	availabilityDetails text,
 * 	criminalRecord bool,
 * 	note text,
 * 	backgroundCheckNeeded bool,
 * 	backgroundCheckPassed bool,
 * 	datetimeEntry timestamptz not null default current_timestamp,
 * 	datetimeLastUpdate timestamptz,
 */

@Entity
@Table(name = "volunteers")
public class Volunteer {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname", length = 50)
    private String firstName;

    @Column(name = "lastname", length = 50)
    private String lastName;

    @Column(name = "dob")
    private LocalDate dob;

    @Size(min = 11, max = 11)
    @Column(name = "oib", columnDefinition="bpchar", length = 11)
    private String oib;

    @Size(min = 1, max = 1)
    @Column(name = "gender", columnDefinition="bpchar", length = 1)
    private String gender;

    @Column(name = "addressofliving")
    private String addressOfLiving;

    @ManyToOne
    @JoinColumn(name="placeoflivingid")
    private Place placeOfLiving;

    @ManyToOne
    @JoinColumn(name="placeofvolunteeringid")
    private Place placeOfVolunteering;

    @Column(name = "phone", length = 15)
    private String phone;

    @Email
    @Column(name = "email", length = 254)
    private String email;

    @Column(name="icename")
    private String iceName;

    @Column(name="icephone")
    private String icePhone;

    @Column(name="householdelderly")
    private boolean householdElderly;

    @Column(name="householdpregnantwomen")
    private boolean householdPregnantWomen;

    @Column(name="pregnantwoman")
    private boolean pregnantWoman;

    @Column(name="householdchild")
    private boolean householdChild;

    @Column(name="householdchronicpatient")
    private boolean householdChronicPatient;

    @Column(name="healthfine")
    private boolean healthFine;

    @Column(name="healthdetails")
    private String healthDetails;

    @Column(name="availabilityhoursweekly")
    private short availabilityHoursWeekly;

    @Column(name="availabilitydetails")
 	private String availabilityDetails;

    @Column(name="criminalrecord")
 	private Boolean criminalRecord;

    @Column(name="note")
 	private String note;

    @Column(name="backgroundcheckneeded")
 	private Boolean backgroundCheckNeeded;

    @Column(name="backgroundcheckpassed")
 	private Boolean backgroundCheckPassed;

    @Column(name = "datetimeentry", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
    private Instant dateTimeEntry = null;

    @Column(name = "datetimelastupdate", columnDefinition="TIMESTAMP", insertable = false)
    private Instant datetimeLastUpdate = null;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vqualifications",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "qualificationid") }
    )
    Set<Qualification> qualifications = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vskills",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "skillid") }
    )
    Set<Qualification> skills = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vexperiences",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "experienceid") }
    )
    Set<Qualification> experiences = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vservices",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "serviceid") }
    )
    Set<Qualification> services = new HashSet<>();

    @Override
    public String toString() {
        return "Volunteer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }


    // Setters and getters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getOib() {
        return oib;
    }

    public void setOib(String oib) {
        this.oib = oib;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddressOfLiving() {
        return addressOfLiving;
    }

    public void setAddressOfLiving(String addressOfLiving) {
        this.addressOfLiving = addressOfLiving;
    }

    public Place getPlaceOfLiving() {
        return placeOfLiving;
    }

    public void setPlaceOfLiving(Place placeOfLiving) {
        this.placeOfLiving = placeOfLiving;
    }

    public Place getPlaceOfVolunteering() {
        return placeOfVolunteering;
    }

    public void setPlaceOfVolunteering(Place placeOfVolunteering) {
        this.placeOfVolunteering = placeOfVolunteering;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIceName() {
        return iceName;
    }

    public void setIceName(String iceName) {
        this.iceName = iceName;
    }

    public String getIcePhone() {
        return icePhone;
    }

    public void setIcePhone(String icePhone) {
        this.icePhone = icePhone;
    }

    public boolean isHouseholdElderly() {
        return householdElderly;
    }

    public void setHouseholdElderly(boolean householdElderly) {
        this.householdElderly = householdElderly;
    }

    public boolean isHouseholdPregnantWomen() {
        return householdPregnantWomen;
    }

    public void setHouseholdPregnantWomen(boolean householdPregnantWomen) {
        this.householdPregnantWomen = householdPregnantWomen;
    }

    public boolean isPregnantWoman() {
        return pregnantWoman;
    }

    public void setPregnantWoman(boolean pregnantWoman) {
        this.pregnantWoman = pregnantWoman;
    }

    public boolean isHouseholdChild() {
        return householdChild;
    }

    public void setHouseholdChild(boolean householdChild) {
        this.householdChild = householdChild;
    }

    public boolean isHouseholdChronicPatient() {
        return householdChronicPatient;
    }

    public void setHouseholdChronicPatient(boolean householdChronicPatient) {
        this.householdChronicPatient = householdChronicPatient;
    }

    public boolean isHealthFine() {
        return healthFine;
    }

    public void setHealthFine(boolean healthFine) {
        this.healthFine = healthFine;
    }

    public String getHealthDetails() {
        return healthDetails;
    }

    public void setHealthDetails(String healthDetails) {
        this.healthDetails = healthDetails;
    }

    public short getAvailabilityHoursWeekly() {
        return availabilityHoursWeekly;
    }

    public void setAvailabilityHoursWeekly(short availabilityHoursWeekly) {
        this.availabilityHoursWeekly = availabilityHoursWeekly;
    }

    public String getAvailabilityDetails() {
        return availabilityDetails;
    }

    public void setAvailabilityDetails(String availabilityDetails) {
        this.availabilityDetails = availabilityDetails;
    }

    public Boolean getCriminalRecord() {
        return criminalRecord;
    }

    public void setCriminalRecord(Boolean criminalRecord) {
        this.criminalRecord = criminalRecord;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Boolean getBackgroundCheckNeeded() {
        return backgroundCheckNeeded;
    }

    public void setBackgroundCheckNeeded(Boolean backgroundCheckNeeded) {
        this.backgroundCheckNeeded = backgroundCheckNeeded;
    }

    public Boolean getBackgroundCheckPassed() {
        return backgroundCheckPassed;
    }

    public void setBackgroundCheckPassed(Boolean backgroundCheckPassed) {
        this.backgroundCheckPassed = backgroundCheckPassed;
    }

    public Instant getDateTimeEntry() {
        return dateTimeEntry;
    }

    public void setDateTimeEntry(Instant dateTimeEntry) {
        this.dateTimeEntry = dateTimeEntry;
    }

    public Instant getDatetimeLastUpdate() {
        return datetimeLastUpdate;
    }

    public void setDatetimeLastUpdate(Instant datetimeLastUpdate) {
        this.datetimeLastUpdate = datetimeLastUpdate;
    }
}
