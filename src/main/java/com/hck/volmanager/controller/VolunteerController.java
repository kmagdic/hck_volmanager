package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ForbiddenHttpException;
import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.WebUser;
import com.hck.volmanager.model.Volunteer;
import com.hck.volmanager.repository.VolunteerRepository;
import org.mapstruct.Context;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.IOException;
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

    @GetMapping("/info")
    public String getInfo() {
        log.info("Get info ...");
        return "App HCK VolManager";
    }

    @GetMapping("/volunteers")
    public List<Volunteer> getAllVolunteers(HttpSession session) throws ForbiddenHttpException, ResourceNotFoundHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");
        log.info("Current user is " + webUser);
        if(webUser == null) {
            throw new ForbiddenHttpException("Unauthorized operation.");
        } else if (webUser.getAdmin()) {
            log.info("Listing all volunteers for admin user ...");
            return volunteerRepository.findAll();
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


    /*@GetMapping("/volunteersInPages")
    public List<Volunteer> getAllVolunteersPages(Pageable pageable) {
        log.info("Listing all volunteers ...");
        return (List<Volunteer>) volunteerRepository.findAll(pageable);
    }*/

    @GetMapping("/volunteers/{id}")
    public ResponseEntity<Volunteer> getVolunteerById(@PathVariable(value = "id") Long id, HttpSession session)
            throws ResourceNotFoundHttpException, ForbiddenHttpException {

        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) {
            throw new ForbiddenHttpException("Unauthorized operation.");
        }

        Volunteer volunteer = volunteerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + id));

        log.info("Get volunteer by id " + volunteer.getId() + ": " + volunteer);
        return ResponseEntity.ok().body(volunteer);
    }

    @PostMapping("/volunteers")
    public Volunteer createVolunteer(@Valid @RequestBody Volunteer volunteerJSON, HttpSession session) throws ResourceNotFoundHttpException, ForbiddenHttpException {
        WebUser webUser = (WebUser) session.getAttribute("webUser");
        if(webUser == null) {
            throw new ForbiddenHttpException("Unauthorized operation.");
        }


        Volunteer newVolunteer = volunteerRepository.save(volunteerJSON);
        log.info("Creating volunteer:  " + volunteerJSON.getId());

        newVolunteer = volunteerRepository.findById(volunteerJSON.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerJSON.getId()));

        return newVolunteer;
    }

    /**
     * @param volunteerId
     * @param volunteerJSON
     * @return
     * @throws ResourceNotFoundHttpException {
     *                                   "id": 2,
     *                                   "firstName": "Tihomir",
     *                                   "lastName": "Magdić",
     *                                   "qualifications": [
     *                                   {
     *                                   "id": 1
     *                                   },
     *                                   {
     *                                   "id": 2
     *                                   }
     *                                   ]
     *                                   }
     */

    @PutMapping("/volunteers/{id}")
    public ResponseEntity<Volunteer> updateVolunteer(@PathVariable(value = "id") Long volunteerId,
                                                     @Valid @RequestBody Volunteer volunteerJSON) throws ResourceNotFoundHttpException {
        //final Volunteer updatedVolunteer = volunteerRepository.save(volunteerJSON);
        //return ResponseEntity.ok(updatedVolunteer);

        Volunteer volunteerDB = volunteerRepository.findById(volunteerId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerId));

        log.info("volunteerJSON: " + volunteerJSON.getId() + ", Volunteer: " + volunteerJSON);
        log.info("Updating of volunteerDB by id: " + volunteerDB.getId() + ", Volunteer: " + volunteerDB);

        // TODO: when proprerty is null it is overwriten to non-null property
        BeanUtils.copyProperties(volunteerJSON, volunteerDB);
        //volunteerDB.setId(volunteerId);
        log.info("Updated: " + volunteerDB.getId() + ", Voluneteer: " + volunteerDB);
        log.info("volunteerJSON.getVolunteerQualifications().size(): " + volunteerJSON.getQualifications().size());
		/*
		volunteerJSON.getVolunteerQualifications().forEach((vq) -> {
			log.info("vq:" + vq);
			//volunteerDB.getVolunteerQualifications().add(vq);
		});
		//volunteerDB.getVolunteerQualifications().addAll(volunteerJSON.getVolunteerQualifications());
		*/
        final Volunteer updatedVolunteer = volunteerRepository.save(volunteerDB);
        return ResponseEntity.ok(updatedVolunteer);
    }

    @DeleteMapping("/volunteers/{id}")
    public Map<String, Boolean> deleteVolunteer(@PathVariable(value = "id") Long volunteerId)
            throws ResourceNotFoundHttpException {
        Volunteer volunteer = volunteerRepository.findById(volunteerId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Volunteer not found for this id :: " + volunteerId));

        log.info("Deleting volunteer by id: " + volunteer.getId());

        volunteerRepository.delete(volunteer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


    @GetMapping("/volunteers/export-csv")
    public void downloadUsersCSV(@Context HttpServletResponse response) {
        log.info("Exporting volonteers ");

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

