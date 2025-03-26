package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class EasyBooking {

    @Id @GeneratedValue
    private Long easyBookingId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Concert concert;

    @ManyToOne
    private Showtime showtime;

    private String seatPreference;
    private LocalDateTime requestDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING, CONFIRMED, CANCELLED
    }
}