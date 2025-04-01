// src/types/seat.ts

// 좌석 상태 열거
export type SeatStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';

// Seat 타입 정의
export interface Seat {
  seatId: number;     // 백엔드 응답 키: seatId
  section: string;    // 백엔드 응답 키: section
  rowNum: string;     // 백엔드 응답 키: rowNum (DB 컬럼: row_num)
  seatNumber: string; // 백엔드 응답 키: seatNumber
  price: number;      // 백엔드 응답 키: price
  status: SeatStatus; // 백엔드 응답 키: status
}

// SeatSelector 컴포넌트가 받을 props 타입
export interface SeatSelectorProps {
  concertId: number;                            // 공연 ID
  showtimeId: number;                           // 상영(공연) 시간 ID
  onSelect: (seatIds: number[]) => void;        // 좌석 선택 콜백
}
