package com.gabrielDev.registrationSystem.service;

import com.gabrielDev.registrationSystem.model.CourseStudent;
import com.gabrielDev.registrationSystem.repository.CourseStundentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseStudentServiceImp implements CourseStundentService{

    @Autowired
    private CourseStundentRepository courseStundentRepository;

    @Override
    public List<CourseStudent> getAllCourseStudents() {
        return courseStundentRepository.findAll();
    }

    @Override
    public CourseStudent studentSave(CourseStudent courseStudent) {
        return courseStundentRepository.save(courseStudent);

    }
}

