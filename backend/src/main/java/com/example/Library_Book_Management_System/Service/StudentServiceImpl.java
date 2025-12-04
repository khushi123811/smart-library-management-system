package com.example.Library_Book_Management_System.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Library_Book_Management_System.Entity.Student;
import com.example.Library_Book_Management_System.Repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository repo;

    @Override
    public List<Student> findAll() {
        return repo.findAll();
    }

    @Override
    public Student findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Student addStudent(Student student) {
        return repo.save(student);
    }

    @Override
    public Student updateStudent(Long id, Student details) {
        Optional<Student> existing = repo.findById(id);

        if (existing.isPresent()) {
            Student s = existing.get();
            s.setName(details.getName());
            s.setDepartment(details.getDepartment());
            s.setEmail(details.getEmail());
            return repo.save(s);
        }
        return null;
    }

    @Override
    public boolean deleteStudent(Long id) {
        Optional<Student> existing = repo.findById(id);
        if (existing.isPresent()) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
