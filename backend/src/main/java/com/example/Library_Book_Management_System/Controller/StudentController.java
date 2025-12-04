package com.example.Library_Book_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Library_Book_Management_System.Entity.Student;
import com.example.Library_Book_Management_System.Service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("allStudents")
    public List<Student> findAll() {
        return service.findAll();
    }

    @GetMapping("getStudent/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = service.findById(id);
        return (student != null) ? ResponseEntity.ok(student) : ResponseEntity.notFound().build();
    }

    @PostMapping("addStudent")
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @PutMapping("updateStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student details) {
        Student updated = service.updateStudent(id, details);
        return (updated != null) ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("deleteStudent/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        boolean deleted = service.deleteStudent(id);
        return (deleted)
                ? ResponseEntity.ok("Student deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
