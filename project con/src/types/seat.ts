// src/types/seat.ts

export type SeatStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';

export interface Seat {
  seatId: number;
  section: string;
  rowNumber: string;
  seatNumber: string;
  price: number;
  status: SeatStatus;
}

// SeatSelector 컴포넌트용 props
export interface SeatSelectorProps {
  concertId: number;
  showtimeId: number;
  onSelect: (seatIds: number[]) => void;
}