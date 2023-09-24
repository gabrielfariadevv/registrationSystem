package com.gabrielDev.registrationSystem.repository;

import com.gabrielDev.registrationSystem.model.CourseStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseStundentRepository extends JpaRepository<CourseStudent, Integer> {
}
