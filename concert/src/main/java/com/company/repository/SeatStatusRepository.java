package com.company.repository;

import com.company.entity.SeatStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatStatusRepository extends JpaRepository<SeatStatus, Long> {
    List<SeatStatus> findByConcert_ConcertIdAndShowtime_ShowtimeId(Long concertId, Long showtimeId);

}
