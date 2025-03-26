package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Showtime {

    @Id @GeneratedValue
    private Long showtimeId;

    @ManyToOne
    @JoinColumn(name = "concert_id")
    private Concert concert;

    private LocalDateTime startTime;
}