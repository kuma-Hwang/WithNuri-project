package com.company.service;

import com.company.entity.SeatStatus;
import com.company.repository.SeatStatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SeatStatusService {

    private final SeatStatusRepository seatStatusRepository;

    public List<SeatStatus> getSeats(Long concertId, Long showtimeId) {
        return seatStatusRepository.findByConcert_ConcertIdAndShowtime_ShowtimeId(concertId, showtimeId);
    }

    public void reserveSeat(Long seatId, Long concertId, Long showtimeId) {
        SeatStatus seatStatus = seatStatusRepository
                .findByConcert_ConcertIdAndShowtime_ShowtimeId(concertId, showtimeId).stream()
                .filter(s -> s.getSeat().getSeatId().equals(seatId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("해당 좌석을 찾을 수 없습니다"));

        if (seatStatus.getStatus() != SeatStatus.Status.AVAILABLE) {
            throw new RuntimeException("이미 예약된 좌석입니다");
        }

        seatStatus.setStatus(SeatStatus.Status.RESERVED);
        seatStatusRepository.save(seatStatus);
    }

    public void reserveSeats(List<Long> seatIds, Long concertId, Long showtimeId) {
        List<SeatStatus> seatStatuses = seatStatusRepository
                .findByConcert_ConcertIdAndShowtime_ShowtimeId(concertId, showtimeId);

        for (Long seatId : seatIds) {
            SeatStatus seatStatus = seatStatuses.stream()
                    .filter(s -> s.getSeat().getSeatId().equals(seatId))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("해당 좌석을 찾을 수 없습니다: " + seatId));

            if (seatStatus.getStatus() != SeatStatus.Status.AVAILABLE) {
                throw new RuntimeException("이미 예약된 좌석입니다: " + seatId);
            }

            seatStatus.setStatus(SeatStatus.Status.RESERVED);
            seatStatusRepository.save(seatStatus);
        }
    }

}
