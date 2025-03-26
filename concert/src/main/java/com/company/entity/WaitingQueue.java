package com.company.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class WaitingQueue {

    @Id @GeneratedValue
    private Long queueId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Concert concert;

    private LocalDateTime requestTime;
    private Integer priority;
}