package com.hck.volmanager;

import com.hck.volmanager.controller.VolunteerController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	private static final Logger log = LoggerFactory.getLogger(Application.class);


	public static void main(String[] args) {
		log.info("Starting HCK Volunteer Manager V0.2");

		SpringApplication.run(Application.class, args);
	}
}
