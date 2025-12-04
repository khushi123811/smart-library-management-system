package com.example.Library_Book_Management_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.Library_Book_Management_System.Entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
