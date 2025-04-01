package com.company.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Concert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "concert_id")
    private Long concertId;

    private String title;

    @ManyToOne
    @JoinColumn(name = "theater_id")
    private Theater theater;

    @Lob
    private String description;
}