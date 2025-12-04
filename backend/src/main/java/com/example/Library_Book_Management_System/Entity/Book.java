package com.example.Library_Book_Management_System.Entity;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Long authorId;    // Only storing author ID (NO relation)


    @Column(nullable = false)
    private Integer quantity;
}
