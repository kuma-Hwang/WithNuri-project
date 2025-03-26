package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Review {

    @Id @GeneratedValue
    private Long reviewId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Concert concert;

    private int rating;

    @Lob
    private String comment;

    private LocalDateTime createdAt;
}