package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ForbiddenHttpException;
import com.hck.volmanager.model.User;
import com.hck.volmanager.model.WebUser;
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
    public WebUser login(@RequestParam String username, @RequestParam String password, HttpSession session) throws ForbiddenHttpException {
        log.info("Login with username '" + username + "'");
        User user = userRepository.findOneByUsername(username);
        if(user != null && user.getEnabled() && user.getPassword().equals(password)) {
            WebUser webUser = new WebUser(user);
            log.info("Found user:  " + webUser.getId());
            session.setAttribute("webUser", webUser);
            return webUser;
        }
        else {
            throw new ForbiddenHttpException("Enabled user with this username and password is not found");
        }
    }

    @DeleteMapping("/auth")
    public User logout(HttpSession session) {
        session.setAttribute("webUser", null);
        return null;
    }
}
