package com.hck.volmanager.controller;

import com.hck.volmanager.model.Project;
import com.hck.volmanager.repository.ProjectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ProjectController {
    private static final Logger log = LoggerFactory.getLogger(ProjectController.class);

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        log.info("Listing all projects ...");
        return projectRepository.findAll();
    }

    @GetMapping("/projects/enabled")
    public List<Project> getAllEnabledProjects() {
        log.info("Listing all projects ...");
        return projectRepository.findAllEnabled();
    }
}
