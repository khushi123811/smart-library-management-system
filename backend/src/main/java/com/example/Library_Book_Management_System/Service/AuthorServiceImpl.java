package com.example.Library_Book_Management_System.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Library_Book_Management_System.Entity.Author;
import com.example.Library_Book_Management_System.Repository.AuthorRepository;

@Service
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorRepository repo;

    @Override
    public List<Author> findAll() {
        return repo.findAll();
    }

    @Override
    public Author findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Author addAuthor(Author author) {
        return repo.save(author);
    }

    @Override
    public Author updateAuthor(Long id, Author details) {
        Optional<Author> existing = repo.findById(id);

        if (existing.isPresent()) {
            Author a = existing.get();
            a.setName(details.getName());
            a.setCountry(details.getCountry());
            return repo.save(a);
        }
        return null;
    }

    @Override
    public boolean deleteAuthor(Long id) {
        Optional<Author> existing = repo.findById(id);
        if (existing.isPresent()) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
