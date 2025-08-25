package com.example.SpringBootRestAPI.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.SpringBootRestAPI.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    List<Employee> findByNameContainingIgnoreCase(String name);
}

