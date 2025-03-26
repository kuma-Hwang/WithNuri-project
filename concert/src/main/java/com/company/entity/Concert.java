package com.company.entity;

import jakarta.persistence.*;

@Entity
public class Concert {

    @Id @GeneratedValue
    private Long concertId;

    private String title;

    @ManyToOne
    @JoinColumn(name = "theater_id")
    private Theater theater;

    @Lob
    private String description;
}