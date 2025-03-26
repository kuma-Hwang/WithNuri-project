package com.company.dto;

import com.company.entity.SeatStatus;
import lombok.Data;

@Data
public class SeatStatusDto {
    private Long seatId;
    private String section;
    private String rowNum;  // rowNumber -> rowNum
    private String seatNumber;
    private String status;
    private int price;

    public static SeatStatusDto from(SeatStatus seatStatus) {
        var s = seatStatus.getSeat();
        SeatStatusDto dto = new SeatStatusDto();
        dto.seatId = s.getSeatId();
        dto.section = s.getSection();
        dto.rowNum = s.getRowNum();  // rowNumber -> rowNum
        dto.seatNumber = s.getSeatNumber();
        dto.status = seatStatus.getStatus().name();
        dto.price = s.getPrice().intValue();
        return dto;
    }
}
