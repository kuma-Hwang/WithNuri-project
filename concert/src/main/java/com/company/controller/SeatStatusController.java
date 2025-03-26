package com.company.controller;

import com.company.dto.SeatReservationRequest;
import com.company.dto.SeatStatusDto;
import com.company.entity.SeatStatus;
import com.company.service.SeatStatusService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seats")
@RequiredArgsConstructor
public class SeatStatusController {

    private final SeatStatusService seatStatusService;

    // 좌석 목록 조회
    @GetMapping("/{concertId}/{showtimeId}")
    public ResponseEntity<List<SeatStatusDto>> getSeats(@PathVariable Long concertId, @PathVariable Long showtimeId) {
        try {
            List<SeatStatus> seats = seatStatusService.getSeats(concertId, showtimeId);
            List<SeatStatusDto> seatStatusDtos = seats.stream().map(SeatStatusDto::from).toList();
            return ResponseEntity.ok(seatStatusDtos);  // 200 OK 응답
        } catch (Exception e) {
            // 오류 발생 시 500 Internal Server Error 응답
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // 좌석 예약
    @PostMapping("/reserve")
    public ResponseEntity<String> reserve(@RequestBody SeatReservationRequest request) {
        try {
            seatStatusService.reserveSeats(request.getSeatIds(), request.getConcertId(), request.getShowtimeId());
            return ResponseEntity.status(HttpStatus.CREATED).body("예약 성공");  // 201 Created 응답
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("예약 실패: " + e.getMessage()); // 400 Bad Request
        }
    }
}
