package com.example.Library_Book_Management_System.Service;

import java.util.List;

import com.example.Library_Book_Management_System.Entity.Student;

public interface StudentService {

    List<Student> findAll();

    Student findById(Long id);

    Student addStudent(Student student);

    Student updateStudent(Long id, Student student);

    boolean deleteStudent(Long id);
}
