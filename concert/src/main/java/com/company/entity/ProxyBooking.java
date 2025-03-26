package com.company.entity;

import jakarta.persistence.*;

@Entity
public class ProxyBooking {

    @Id @GeneratedValue
    private Long proxyBookingId;

    @ManyToOne
    @JoinColumn(name = "senior_user_id")
    private User seniorUser;

    @ManyToOne
    @JoinColumn(name = "proxy_user_id")
    private User proxyUser;

    @ManyToOne
    private Concert concert;

    @ManyToOne
    private Showtime showtime;

    @ManyToOne
    private Seat seat;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING, CONFIRMED, CANCELLED
    }
}