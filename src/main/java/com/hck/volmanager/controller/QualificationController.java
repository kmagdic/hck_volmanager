package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.Qualification;
import com.hck.volmanager.repository.QualificationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class QualificationController {
    private static final Logger log = LoggerFactory.getLogger(QualificationController.class);

    @Autowired
    private QualificationRepository qualificationRepository;

    @GetMapping("/qualifications")
    public List<Qualification> getAllQualifications() {
        log.info("Listing all qualifications ...");
        return qualificationRepository.findAll();
    }

    @PostMapping("/qualifications")
    public Qualification createQualification(@Valid @RequestBody Qualification qualification) throws ResourceNotFoundHttpException {
        Qualification newQualification = qualificationRepository.save(qualification);
        log.info("Creating qualification:  " + qualification.getId());

        newQualification = qualificationRepository.findById(qualification.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Qualification not found for this id :: " + qualification.getId()));

        return newQualification;
    }

    /**
     * @param qualificationId
     * @param qualificationJSON
     * @return
     * @throws ResourceNotFoundHttpException
     */

    @PutMapping("/qualifications/{id}")
    public ResponseEntity<Qualification> updateQualification(@PathVariable(value = "id") Long qualificationId,
                                                     @Valid @RequestBody Qualification qualificationJSON) throws ResourceNotFoundHttpException {
        Qualification qualificationDB = qualificationRepository.findById(qualificationId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Qualification not found for this id :: " + qualificationId));

        BeanUtils.copyProperties(qualificationJSON, qualificationDB);
        log.info("Updated: " + qualificationDB.getId() + ", Qualification: " + qualificationDB);
        final Qualification updatedQualification = qualificationRepository.save(qualificationDB);
        return ResponseEntity.ok(updatedQualification);
    }

    @DeleteMapping("/qualifications/{id}")
    public Map<String, Boolean> deleteQualification(@PathVariable(value = "id") Long qualificationId)
            throws ResourceNotFoundHttpException {
        Qualification qualification = qualificationRepository.findById(qualificationId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Qualification not found for this id :: " + qualificationId));

        log.info("Deleting qualification by id: " + qualification.getId());

        qualificationRepository.delete(qualification);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
