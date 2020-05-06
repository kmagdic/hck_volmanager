package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.Skill;
import com.hck.volmanager.repository.SkillRepository;
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
public class SkillController {
    private static final Logger log = LoggerFactory.getLogger(SkillController.class);

    @Autowired
    private SkillRepository skillRepository;

    @GetMapping("/skills")
    public List<Skill> getAllSkills() {
        log.info("Listing all skills ...");
        return skillRepository.findAll();
    }

    @PostMapping("/skills")
    public Skill createSkill(@Valid @RequestBody Skill skill) throws ResourceNotFoundHttpException {
        Skill newSkill = skillRepository.save(skill);
        log.info("Creating skill:  " + skill.getId());

        newSkill = skillRepository.findById(skill.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Skill not found for this id :: " + skill.getId()));

        return newSkill;
    }

    /**
     * @param skillId
     * @param skillJSON
     * @return
     * @throws ResourceNotFoundHttpException
     */

    @PutMapping("/skills/{id}")
    public ResponseEntity<Skill> updateSkill(@PathVariable(value = "id") Long skillId,
                                                     @Valid @RequestBody Skill skillJSON) throws ResourceNotFoundHttpException {
        Skill skillDB = skillRepository.findById(skillId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Skill not found for this id :: " + skillId));

        BeanUtils.copyProperties(skillJSON, skillDB);
        log.info("Updated: " + skillDB.getId() + ", Skill: " + skillDB);
        final Skill updatedSkill = skillRepository.save(skillDB);
        return ResponseEntity.ok(updatedSkill);
    }

    @DeleteMapping("/skills/{id}")
    public Map<String, Boolean> deleteSkill(@PathVariable(value = "id") Long skillId)
            throws ResourceNotFoundHttpException {
        Skill skill = skillRepository.findById(skillId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Skill not found for this id :: " + skillId));

        log.info("Deleting skill by id: " + skill.getId());

        skillRepository.delete(skill);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
