package com.hck.volmanager.repository;

import com.hck.volmanager.model.Skill;
import com.hck.volmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    User findOneByUsername(String username);
}
