package com.example.Library_Book_Management_System.Service;

import java.util.List;

import com.example.Library_Book_Management_System.Entity.Author;

public interface AuthorService {

    List<Author> findAll();

    Author findById(Long id);

    Author addAuthor(Author author);

    Author updateAuthor(Long id, Author author);

    boolean deleteAuthor(Long id);
}
