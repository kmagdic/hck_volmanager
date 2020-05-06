package com.hck.volmanager.repository;

import com.hck.volmanager.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{

    @Query(value = "select v.* from hck.volunteers v, hck.hcksociety s, hck.places p, hck.users u where " +
            "u.username = ?1 and u.hcksocietyid = s.id and p.id = v.placeofvolunteeringid and s.id = p.hcksocietyid",
            nativeQuery = true
    )
    List<Volunteer> findAllByUsername(String username);
}
