package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ForbiddenHttpException;
import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.Availability;
import com.hck.volmanager.model.WebUser;
import com.hck.volmanager.model.Volunteer;
import com.hck.volmanager.repository.VolunteerRepository;
import org.mapstruct.Context;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;



@RestController
@RequestMapping("/api/v1")
public class VolunteerController {
    private static final Logger log = LoggerFactory.getLogger(VolunteerController.class);

    @Autowired
    private VolunteerRepository volunteerRepository;

    @GetMapping("/volunteers")
    public List<Volunteer> getAllVolunteers(HttpSession session, HttpServletRequest request) throws ForbiddenHttpException, ResourceNotFoundHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");

        if(webUser == null && request.getHeader("T").equals("1")) {
            log.info("For testing purposes only ... ");

            //Volunteer v = new Volunteer();
            //v.setFirstName("Tomislav2");
            List<Volunteer> volunteers = volunteerRepository.findAllJoined();
            return volunteers;
            //return volunteerRepository.findAllJoined();

        }


        if(webUser == null) {
            throw new ForbiddenHttpException("Unauthorized operation.");
        } else if (webUser.getAdmin()) {
            log.info("Listing all volunteers for admin user ...");
            Volunteer enabledVolonteer = new Volunteer();
            enabledVolonteer.setEnabled(true);
            return volunteerRepository.findAll(Example.of(enabledVolonteer));
        } else if(webUser.getHckSociety().getName().equals("nacionalno")) {
            log.info("Listing volunteers for national society " + webUser.getHckSociety() + " ...");
            return volunteerRepository.findAllByNational(webUser.getHckSociety().getId());
        } else {
            if(webUser.getHckSociety() == null)
                throw new ResourceNotFoundHttpException("No HCK society attached to logged user");

            log.info("Listing volunteers for HCK society " + webUser.getHckSociety() + " ...");
            return volunteerRepository.findAllByHcksocietyid(webUser.getHckSociety().getId());
        }
    }

    @GetMapping("/volunteers/{id}")
    public ResponseEntity<Volunteer> getVolunteerById(@PathVariable(value = "id") Long id, HttpSession session, HttpServletRequest request)
            throws ResourceNotFoundHttpException, ForbiddenHttpException {

        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) {
            if (request.getHeader("T") != null && request.getHeader("T").equals("1"))
                log.info("Authorization for testing");
            else
                throw new ForbiddenHttpException("Unauthorized operation.");
        }

        Volunteer volunteer = volunteerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + id));

        log.info("Get volunteer by id " + volunteer.getId() + ": " + volunteer);
        return ResponseEntity.ok().body(volunteer);
    }

    @PostMapping("/volunteers")
    public Volunteer createVolunteer(@Valid @RequestBody Volunteer volunteerJSON, HttpSession session) throws ResourceNotFoundHttpException, ForbiddenHttpException, IllegalAccessException {
        Volunteer newVolunteer;
        try {
            // save without availabilability
            Availability a = volunteerJSON.getAvailability();
            volunteerJSON.setAvailability(null);
            newVolunteer = volunteerRepository.save(volunteerJSON);

            // save with availability - throws not-null constraint exception on availability.volounteerId
            //a.setVolunteer(newVolunteer);
            //newVolunteer.setAvailability(a);
            //volunteerRepository.save(newVolunteer);


        } catch(Exception e) {
            log.warn("Error in creating volunteer: " + e.getMessage());
            log.warn("Volunteer: " + volunteerJSON);

            for (Field field : volunteerJSON.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                String name = field.getName();
                Object value = field.get(volunteerJSON);
                log.warn("Field '" + name + "': value: '" + value + "'");
            }

            throw new ResourceNotFoundHttpException("Volunteer is not created! Error: " + e.getMessage());
        }
        log.info("Created volunteer id:  " + newVolunteer.getId());

        newVolunteer = volunteerRepository.findById(volunteerJSON.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerJSON.getId()));

        return newVolunteer;
    }

    @PutMapping("/volunteers/{id}")
    public ResponseEntity<Volunteer> updateVolunteer(@PathVariable(value = "id") Long volunteerId,
                                                     @Valid @RequestBody Volunteer volunteerJSON, HttpSession session) throws ResourceNotFoundHttpException, ForbiddenHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) throw new ForbiddenHttpException("Unauthorized operation.");

        Volunteer volunteerDB = volunteerRepository.findById(volunteerId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerId));

        log.info("Updating of volunteerDB by id: " + volunteerDB.getId() + ", Volunteer: " + volunteerDB);

        // it is only allowed to change backgroundCheckNeeded and backgroundCheckPassed
        // this is allowed if webUser has good rights
        if(webUser.getChangeCheck() && volunteerJSON.getBackgroundCheckNeeded() != volunteerDB.getBackgroundCheckNeeded()){
            volunteerDB.setBackgroundCheckNeeded(volunteerJSON.getBackgroundCheckNeeded());
            log.info("Changed backgroundCheckNeeded to " + volunteerDB.getBackgroundCheckNeeded());
            volunteerRepository.save(volunteerDB);
            return ResponseEntity.ok(volunteerDB);
        } else if(webUser.getChangeStatus() && volunteerJSON.getBackgroundCheckPassed() != volunteerDB.getBackgroundCheckPassed()){
            volunteerDB.setBackgroundCheckPassed(volunteerJSON.getBackgroundCheckPassed());
            log.info("Changed backgroundCheckPassed to " + volunteerDB.getBackgroundCheckPassed());
            volunteerRepository.save(volunteerDB);
            return ResponseEntity.ok(volunteerDB);
        } else {
            throw new ForbiddenHttpException("It is not allowed to change any other fields");
        }

        /*
        // TODO: when property is null it is overwritten to non-null property
        BeanUtils.copyProperties(volunteerJSON, volunteerDB);
        //volunteerDB.setId(volunteerId);
        log.info("Updated: " + volunteerDB.getId() + ", Volunteer: " + volunteerDB);
        log.info("volunteerJSON.getVolunteerQualifications().size(): " + volunteerJSON.getQualifications().size());

		volunteerJSON.getVolunteerQualifications().forEach((vq) -> {
			log.info("vq:" + vq);
			//volunteerDB.getVolunteerQualifications().add(vq);
		});
		//volunteerDB.getVolunteerQualifications().addAll(volunteerJSON.getVolunteerQualifications());

        final Volunteer updatedVolunteer = volunteerRepository.save(volunteerDB);
        return ResponseEntity.ok(updatedVolunteer);

         */
    }

    @DeleteMapping("/volunteers/{id}")
    public Map<String, Boolean> deleteVolunteer(@PathVariable(value = "id") Long volunteerId, HttpSession session)
            throws ResourceNotFoundHttpException, ForbiddenHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) throw new ForbiddenHttpException("Unauthorized operation.");

        Volunteer volunteer = volunteerRepository.findById(volunteerId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerId));

        log.info("Deleting volunteer by id: " + volunteer.getId());

        volunteerRepository.delete(volunteer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @GetMapping("/volunteers/export-csv")
    public void downloadUsersCSV(@Context HttpServletResponse response, HttpSession session) throws ForbiddenHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) throw new ForbiddenHttpException("Unauthorized operation.");

        log.info("Exporting volunteers ");

        String filename = "HCK_volonteri_export.csv";
        List<Volunteer> volunteers = volunteerRepository.findAll();
        try {
            response.setContentType("text/csv");
            response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\"" + filename + "\"");
            response.setHeader(HttpHeaders.CONTENT_ENCODING, "UTF-8");
            CSVPrinter csvPrinter = new CSVPrinter(response.getWriter(),
                    CSVFormat.EXCEL
                            .withHeader("ID", "Ime", "Prezime")
                            .withQuote('"')
                    );
            for (Volunteer v : volunteers) {
                csvPrinter.printRecord(Arrays.asList(v.getId(), v.getFirstName(), v.getLastName()));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}

