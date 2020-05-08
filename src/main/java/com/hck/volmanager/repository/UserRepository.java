package com.hck.volmanager.repository;

import com.hck.volmanager.model.User;
import com.hck.volmanager.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    @Query(value = "select * from hck.users where enabled and username = :username and crypt(:pass, salt) = pass",
            nativeQuery = true
    )
    User findOneByUsernameAndHashedPass(
            @Param("username") String username,
            @Param("pass") String pass
    );
}
