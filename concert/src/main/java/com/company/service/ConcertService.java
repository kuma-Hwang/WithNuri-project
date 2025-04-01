package com.company.service;

import com.company.entity.Concert;
import com.company.repository.ConcertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConcertService {

    private final ConcertRepository concertRepository;

    // 공연 정보 가져오기
    public List<Concert> getAllConcerts() {
        return concertRepository.findAll();
    }
}
