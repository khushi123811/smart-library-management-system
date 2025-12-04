package com.example.Library_Book_Management_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.Library_Book_Management_System.Entity.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
