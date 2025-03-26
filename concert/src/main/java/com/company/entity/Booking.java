package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Booking {

    @Id @GeneratedValue
    private Long bookingId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Concert concert;

    @ManyToOne
    private Showtime showtime;

    @ManyToOne
    private Seat seat;

    private LocalDateTime bookingDate;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @Enumerated(EnumType.STRING)
    private BookingType bookingType;

    public enum PaymentStatus {
        PENDING, PAID, CANCELLED
    }

    public enum BookingType {
        NORMAL, EASY
    }
}