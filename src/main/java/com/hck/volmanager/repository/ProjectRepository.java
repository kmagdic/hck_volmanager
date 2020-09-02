package com.hck.volmanager.repository;

import com.hck.volmanager.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
    @Query(value = "FROM Project p where p.enabled = true")
    List<Project> findAllEnabled();
}
