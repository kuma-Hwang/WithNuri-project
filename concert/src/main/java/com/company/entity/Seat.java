package com.company.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long seatId;

    @ManyToOne
    @JoinColumn(name = "theater_id")
    private Theater theater;

    private String section;

    @Column(name = "row_num") // DB 컬럼과 일치
    private String rowNum;

    private String seatNumber;

    @Enumerated(EnumType.STRING)
    private Status status;

    private BigDecimal price;

    public enum Status {
        AVAILABLE, RESERVED, SOLD
    }
}
