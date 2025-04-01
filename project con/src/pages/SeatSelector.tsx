import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SeatSelector.css';
import { Seat, SeatSelectorProps } from '../types/seat';

const SeatSelector: React.FC<SeatSelectorProps> = ({ concertId, showtimeId, onSelect }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get(`/api/seats/${concertId}/${showtimeId}`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setSeats(res.data);
        } else {
          console.error('응답이 배열이 아닙니다', res.data);
        }
      })
      .catch(err => console.error('좌석 불러오기 실패', err));
  }, [concertId, showtimeId]);

  const toggleSelect = (seatId: number) => {
    setSelectedSeatIds(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  useEffect(() => {
    onSelect(selectedSeatIds);
  }, [selectedSeatIds, onSelect]);

  // seat.rowNum으로 변경
  const groupedSeats = seats.reduce((acc, seat) => {
    if (!acc[seat.rowNum]) {
      acc[seat.rowNum] = [];
    }
    acc[seat.rowNum].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  return (
    <div className="seat-layout">
      {Object.entries(groupedSeats).map(([row, seatsInRow]) => (
        <div className="seat-row" key={row}>
          <span className="row-label">{row}</span>
          {seatsInRow
            .sort((a, b) => parseInt(a.seatNumber) - parseInt(b.seatNumber))
            .map(seat => (
              <button
                key={seat.seatId}
                className={`seat ${seat.status?.toLowerCase() || ''} ${
                  selectedSeatIds.includes(seat.seatId) ? 'selected' : ''
                }`}
                onClick={() => seat.status === 'AVAILABLE' && toggleSelect(seat.seatId)}
                disabled={seat.status !== 'AVAILABLE'}
              >
                {seat.seatNumber}
              </button>
            ))}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
