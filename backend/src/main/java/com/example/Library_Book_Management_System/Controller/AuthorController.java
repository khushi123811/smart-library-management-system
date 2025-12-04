package com.example.Library_Book_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Library_Book_Management_System.Entity.Author;
import com.example.Library_Book_Management_System.Service.AuthorService;

@RestController
@RequestMapping("/author")
@CrossOrigin("http://localhost:5173")
public class AuthorController {

    @Autowired
    private AuthorService service;

    @GetMapping("allAuthors")
    public List<Author> findAll() {
        return service.findAll();
    }

    @GetMapping("getAuthor/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable Long id) {
        Author author = service.findById(id);
        return (author != null) ? ResponseEntity.ok(author) : ResponseEntity.notFound().build();
    }

    @PostMapping("addAuthor")
    public Author addAuthor(@RequestBody Author author) {
        return service.addAuthor(author);
    }

    @PutMapping("updateAuthor/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable Long id, @RequestBody Author details) {
        Author updated = service.updateAuthor(id, details);
        return (updated != null) ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("deleteAuthor/{id}")
    public ResponseEntity<String> deleteAuthor(@PathVariable Long id) {
        boolean deleted = service.deleteAuthor(id);
        return (deleted)
                ? ResponseEntity.ok("Author deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
