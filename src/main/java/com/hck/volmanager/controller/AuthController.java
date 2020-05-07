package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ForbiddenHttpException;
import com.hck.volmanager.model.User;
import com.hck.volmanager.model.WebUser;
import com.hck.volmanager.repository.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

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
        String hashedPassword = DigestUtils.md5Hex(password);
        if(user != null && user.getEnabled() && user.getPassword().equals(hashedPassword)) {
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
    public Map<String, Boolean> logout(HttpSession session) {
        session.setAttribute("webUser", null);

        Map<String, Boolean> response = new HashMap<>();
        response.put("logout", Boolean.TRUE);

        return response;
    }


    /*
    public static void main(String[] args) {
        String hashedPassword = DigestUtils.md5Hex("admin-hck2020");
        System.out.println(hashedPassword);
    }

     */
}
