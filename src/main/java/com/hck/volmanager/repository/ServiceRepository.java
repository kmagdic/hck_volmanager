package com.hck.volmanager.repository;

import com.hck.volmanager.model.Service;
import com.hck.volmanager.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long>{

}
