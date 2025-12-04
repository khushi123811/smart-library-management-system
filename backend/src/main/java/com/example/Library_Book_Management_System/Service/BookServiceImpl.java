package com.example.Library_Book_Management_System.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Library_Book_Management_System.Entity.Book;
import com.example.Library_Book_Management_System.Repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository repo;

    @Override
    public List<Book> findAll() {
        return repo.findAll();
    }

    @Override
    public Book findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Book addBook(Book book) {
        return repo.save(book);
    }

    @Override
    public Book updateBook(Long id, Book details) {
        Optional<Book> existing = repo.findById(id);

        if (existing.isPresent()) {
            Book b = existing.get();
            b.setTitle(details.getTitle());
            b.setAuthorId(details.getAuthorId());
            b.setQuantity(details.getQuantity());
            return repo.save(b);
        }
        return null;
    }

    @Override
    public boolean deleteBook(Long id) {
        Optional<Book> existing = repo.findById(id);
        if (existing.isPresent()) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
