package com.hck.volmanager.repository;

import com.hck.volmanager.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Volunteer, Long>{

}
