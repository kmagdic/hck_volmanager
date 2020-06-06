package com.hck.volmanager.repository;

import com.hck.volmanager.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{

    @Query(value = "select v.* from " +
            "hck.volunteers v left join hck.places p on (p.id = v.placeofvolunteeringid) " +
            "where " +
            "p.hcksocietyid = :hcksocietyid " +
            "order by " +
            "v.id",
            nativeQuery = true
    )
    List<Volunteer> findAllByHcksocietyid(
        @Param("hcksocietyid") Long hcksocietyid
    );

    @Query(value = "select v.* from " +
            "hck.volunteers v left join hck.places p on (p.id = v.placeofvolunteeringid) " +
            "where " +
            "p.hcksocietyid = :hcksocietyid or " +
            "v.backgroundcheckneeded " +
            "order by " +
            "v.id",
            nativeQuery = true
    )
    List<Volunteer> findAllByNational(
        @Param("hcksocietyid") Long hcksocietyid
    );

    @Query(value = "FROM Volunteer v " +
            "LEFT JOIN FETCH v.placeOfLiving " +
            "LEFT JOIN FETCH v.placeOfVolunteering " +
            "LEFT JOIN FETCH v.qualifications " +
            "LEFT JOIN FETCH v.customQualifications " +
            "LEFT JOIN FETCH v.skills " +
            "LEFT JOIN FETCH v.customSkills " +
            "LEFT JOIN FETCH v.experiences " +
            "LEFT JOIN FETCH v.customExperiences " +
            "LEFT JOIN FETCH v.services " +
            "LEFT JOIN FETCH v.customServices "

    )
    List<Volunteer> findAllJoined();
}
