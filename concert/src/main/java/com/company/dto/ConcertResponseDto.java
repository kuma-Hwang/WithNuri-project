package com.company.dto;

import com.company.entity.Concert;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConcertResponseDto {
    private Long concertId;
    private String title;
    private String description;
    private String theaterName;

    public static ConcertResponseDto fromEntity(Concert concert) {
        ConcertResponseDto dto = new ConcertResponseDto();
        dto.setConcertId(concert.getConcertId());
        dto.setTitle(concert.getTitle());
        dto.setDescription(concert.getDescription());

        if (concert.getTheater() != null) {
            dto.setTheaterName(concert.getTheater().getName());
        }

        return dto;
    }
}