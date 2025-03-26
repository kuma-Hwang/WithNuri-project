package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class PhoneBooking {

    @Id @GeneratedValue
    private Long phoneBookingId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Concert concert;

    @ManyToOne
    private Showtime showtime;

    private String requestedBy;
    private LocalDateTime requestDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING, CONFIRMED, CANCELLED
    }
}