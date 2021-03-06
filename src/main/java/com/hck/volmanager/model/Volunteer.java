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
    private Boolean householdElderly;

    @Column(name="householdpregnantwomen")
    private Boolean householdPregnantWomen;

    @Column(name="pregnantwoman")
    private Boolean pregnantWoman;

    @Column(name="householdchild")
    private Boolean householdChild;

    @Column(name="householdchronicpatient")
    private Boolean householdChronicPatient;

    @Column(name="healthfine")
    private Boolean healthFine;

    @Column(name="healthdetails")
    private String healthDetails;

    @Column(name="availabilityhoursweekly")
    private Short availabilityHoursWeekly;

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
    private Instant dateTimeLastUpdate = null;

    @ManyToMany(cascade = { CascadeType.MERGE })
    @JoinTable(
            name = "vqualifications",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "qualificationid") }
    )
    Set<Qualification> qualifications = new HashSet<>();

    @OneToMany(mappedBy="volunteer")
    private Set<CustomQualification> customQualifications;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vskills",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "skillid") }
    )
    Set<Skill> skills = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vexperiences",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "experienceid") }
    )
    Set<Experience> experiences = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "vservices",
            joinColumns = { @JoinColumn(name = "volunteerid") },
            inverseJoinColumns = { @JoinColumn(name = "serviceid") }
    )
    Set<Service> services = new HashSet<>();

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

    public Boolean isHouseholdElderly() {
        return householdElderly;
    }

    public void setHouseholdElderly(Boolean householdElderly) {
        this.householdElderly = householdElderly;
    }

    public Boolean isHouseholdPregnantWomen() {
        return householdPregnantWomen;
    }

    public void setHouseholdPregnantWomen(Boolean householdPregnantWomen) {
        this.householdPregnantWomen = householdPregnantWomen;
    }

    public Boolean isPregnantWoman() {
        return pregnantWoman;
    }

    public void setPregnantWoman(Boolean pregnantWoman) {
        this.pregnantWoman = pregnantWoman;
    }

    public Boolean isHouseholdChild() {
        return householdChild;
    }

    public void setHouseholdChild(Boolean householdChild) {
        this.householdChild = householdChild;
    }

    public Boolean isHouseholdChronicPatient() {
        return householdChronicPatient;
    }

    public void setHouseholdChronicPatient(Boolean householdChronicPatient) {
        this.householdChronicPatient = householdChronicPatient;
    }

    public Boolean isHealthFine() {
        return healthFine;
    }

    public void setHealthFine(Boolean healthFine) {
        this.healthFine = healthFine;
    }

    public String getHealthDetails() {
        return healthDetails;
    }

    public void setHealthDetails(String healthDetails) {
        this.healthDetails = healthDetails;
    }

    public Short getAvailabilityHoursWeekly() {
        return availabilityHoursWeekly;
    }

    public void setAvailabilityHoursWeekly(Short availabilityHoursWeekly) {
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

    /*

    public void setDateTimeEntry(Instant dateTimeEntry) {
        this.dateTimeEntry = dateTimeEntry;
    }

    */

    public Instant getDateTimeLastUpdate() {
        return dateTimeLastUpdate;
    }

    /*
    public void setDatetimeLastUpdate(Instant dateTimeLastUpdate) {
        this.dateTimeLastUpdate = dateTimeLastUpdate;
    }
     */


    public Set<Qualification> getQualifications() {
        return qualifications;
    }

    public void addCustomQualification(CustomQualification customQualification) {
        this.customQualifications.add(customQualification);
        customQualification.setVolunteer(this);
    }

    public void removeCustomQualification(CustomQualification customQualification) {
        this.customQualifications.remove(customQualification);
        customQualification.setVolunteer(null);
    }



    // TODO: add CustomSkill, CustomExperience, CustomService
    // TODO: check needs for setters of attributes: dateTimeEntry and datetimeLastUpdate
}
