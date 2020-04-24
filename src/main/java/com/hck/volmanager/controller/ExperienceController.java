package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundException;
import com.hck.volmanager.model.Experience;
import com.hck.volmanager.repository.ExperienceRepository;
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
public class ExperienceController {
    private static final Logger log = LoggerFactory.getLogger(ExperienceController.class);

    @Autowired
    private ExperienceRepository experienceRepository;

    @GetMapping("/experiences")
    public List<Experience> getAllExperiences() {
        log.info("Listing all experiences ...");
        return experienceRepository.findAll();
    }

    @PostMapping("/experiences")
    public Experience createExperience(@Valid @RequestBody Experience experience) throws ResourceNotFoundException {
        Experience newExperience = experienceRepository.save(experience);
        log.info("Creating experience:  " + experience.getId());

        newExperience = experienceRepository.findById(experience.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found for this id :: " + experience.getId()));

        return newExperience;
    }

    /**
     * @param experienceId
     * @param experienceJSON
     * @return
     * @throws ResourceNotFoundException
     */

    @PutMapping("/experiences/{id}")
    public ResponseEntity<Experience> updateExperience(@PathVariable(value = "id") Long experienceId,
                                                     @Valid @RequestBody Experience experienceJSON) throws ResourceNotFoundException {
        Experience experienceDB = experienceRepository.findById(experienceId)
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found for this id :: " + experienceId));

        BeanUtils.copyProperties(experienceJSON, experienceDB);
        log.info("Updated: " + experienceDB.getId() + ", Experience: " + experienceDB);
        final Experience updatedExperience = experienceRepository.save(experienceDB);
        return ResponseEntity.ok(updatedExperience);
    }

    @DeleteMapping("/experiences/{id}")
    public Map<String, Boolean> deleteExperience(@PathVariable(value = "id") Long experienceId)
            throws ResourceNotFoundException {
        Experience experience = experienceRepository.findById(experienceId)
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found for this id :: " + experienceId));

        log.info("Deleting experience by id: " + experience.getId());

        experienceRepository.delete(experience);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
