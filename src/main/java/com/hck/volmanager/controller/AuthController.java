package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundException;
import com.hck.volmanager.model.User;
import com.hck.volmanager.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/v1")
public class AuthController {
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/auth")
    public User login(@RequestParam String username, @RequestParam String password, HttpSession session) throws ResourceNotFoundException {
        log.info("Login with username '" + username + "' and password '" + password + "'");
        User user = userRepository.findOneByUsername(username);
        if(user != null && user.getEnabled() && user.getPassword().equals(password)) {
            log.info("Found user:  " + user.getId());
            session.setAttribute("webUser", user);
            return user;
        }
        else {
            throw new ResourceNotFoundException("Enabled user with this username and password is not found");
        }

    }

    /*

    @PostMapping("/skills")
    public Skill createSkill(@Valid @RequestBody Skill skill) throws ResourceNotFoundException {
        Skill newSkill = userRepository.save(skill);
        log.info("Creating skill:  " + skill.getId());

        newSkill = userRepository.findById(skill.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found for this id :: " + skill.getId()));

        return newSkill;
    }

    /**
     * @param skillId
     * @param skillJSON
     * @return
     * @throws ResourceNotFoundException
     */

}