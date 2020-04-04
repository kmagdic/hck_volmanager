package com.hck.volmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hck.volmanager.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
