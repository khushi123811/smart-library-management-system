package com.example.Library_Book_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Library_Book_Management_System.Entity.Book;
import com.example.Library_Book_Management_System.Service.BookService;

@RestController
@RequestMapping("/book")
@CrossOrigin("http://localhost:5173")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping("allBooks")
    public List<Book> findAll() {
        return service.findAll();
    }

    @GetMapping("getBook/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = service.findById(id);
        return (book != null) ? ResponseEntity.ok(book) : ResponseEntity.notFound().build();
    }

    @PostMapping("addBook")
    public Book addBook(@RequestBody Book book) {
        return service.addBook(book);
    }

    @PutMapping("updateBook/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book details) {
        Book updated = service.updateBook(id, details);
        return (updated != null) ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("deleteBook/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        boolean deleted = service.deleteBook(id);
        return (deleted)
                ? ResponseEntity.ok("Book deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
