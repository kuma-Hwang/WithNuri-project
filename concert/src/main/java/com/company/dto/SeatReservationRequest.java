package com.company.dto;

import lombok.Data;

import java.util.List;

@Data
public class SeatReservationRequest {
    private List<Long> seatIds;
    private Long concertId;
    private Long showtimeId;
    private Long userId; // 예매자 정보
}
