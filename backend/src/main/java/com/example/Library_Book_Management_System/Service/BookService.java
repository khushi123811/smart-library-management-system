package com.example.Library_Book_Management_System.Service;

import java.util.List;

import com.example.Library_Book_Management_System.Entity.Book;

public interface BookService {

    List<Book> findAll();

    Book findById(Long id);

    Book addBook(Book book);

    Book updateBook(Long id, Book book);

    boolean deleteBook(Long id);
}
