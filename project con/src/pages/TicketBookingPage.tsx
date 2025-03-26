import { useState } from 'react';
import axios from 'axios';
import '../styles/TicketBookingPage.css';
import SeatSelector from '../pages/SeatSelector';


const TicketBookingPage = () => {
  const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

  const concertId = 1;
  const showtimeId = 1;
  const userId = 1; // 실제 로그인된 사용자 ID로 대체

  const handleReserve = async () => {
    if (selectedSeatIds.length === 0) return;

    try {
      await axios.post('/api/seats/reserve', {
        seatIds: selectedSeatIds,
        concertId,
        showtimeId,
        userId,
      });
      alert('예매 성공!');
      setSelectedSeatIds([]); // 선택 초기화
    } catch (e) {
      alert('예매 실패');
    }
  };

  return (
    <div>
      <h1>좌석 선택</h1>
      <SeatSelector
        concertId={concertId}
        showtimeId={showtimeId}
        onSelect={setSelectedSeatIds}
      />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleReserve} disabled={selectedSeatIds.length === 0}>
          예매하기
        </button>
      </div>
    </div>
  );
};

export default TicketBookingPage;
