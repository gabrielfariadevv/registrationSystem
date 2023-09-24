package com.gabrielDev.registrationSystem.controller;

import com.gabrielDev.registrationSystem.model.CourseStudent;
import org.springframework.web.bind.annotation.*;
import com.gabrielDev.registrationSystem.service.CourseStundentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


@RestController
@RequestMapping("/courseStudent")
@CrossOrigin 
public class CourseStudentController {
    @Autowired
    private CourseStundentService courseStundentService;

    @PostMapping("/put")
    public String put(@RequestBody CourseStudent courseStudent){
        courseStundentService.studentSave(courseStudent);
        return"a new student has been added to the list";
    }

    @GetMapping("/getAll")
    public List<CourseStudent> getAllCourseStudents(){
        return courseStundentService.getAllCourseStudents();
    }
}
