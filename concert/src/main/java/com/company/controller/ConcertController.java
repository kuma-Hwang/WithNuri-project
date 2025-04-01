package com.company.controller;

import com.company.dto.ConcertResponseDto;
import com.company.entity.Concert;
import com.company.service.ConcertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/concerts")
@RequiredArgsConstructor
public class ConcertController {

    private final ConcertService concertService;

    @GetMapping
    public ResponseEntity<List<ConcertResponseDto>> getAllConcerts() {
        try {
            List<Concert> concerts = concertService.getAllConcerts();

            List<ConcertResponseDto> concertDtos = concerts.stream()
                    .map(ConcertResponseDto::fromEntity)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(concertDtos);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);
        }
    }
}
