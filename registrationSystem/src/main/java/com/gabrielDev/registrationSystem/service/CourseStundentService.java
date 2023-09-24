package com.gabrielDev.registrationSystem.service;

import com.gabrielDev.registrationSystem.model.CourseStudent;

import java.util.List;

public interface CourseStundentService {
    public CourseStudent studentSave(CourseStudent courseStudent);
    public List<CourseStudent> getAllCourseStudents();
}
