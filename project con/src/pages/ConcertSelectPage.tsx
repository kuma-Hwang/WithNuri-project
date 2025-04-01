import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Concert } from '../types/concert';

const ConcertSelectionPage = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Concert[]>('/api/concerts')
      .then((response) => {
        const validConcerts = response.data.filter(
          (concert) => concert && concert.concertId != null
        );
        setConcerts(validConcerts);
      })
      .catch((error) => {
        console.error('공연 정보 불러오기 실패:', error);
      });
  }, []);

  const handleSelectConcert = (concertId: number) => {
    navigate(`/booking/${concertId}`); // 이 경로로 이동 시 좌석 선택 페이지 보여야 함
  };

  return (
    <div>
      <h1>공연장 선택</h1>
      <div>
        {concerts.length === 0 ? (
          <p>불러올 공연 정보가 없습니다.</p>
        ) : (
          concerts.map((concert) => (
            <div key={concert.concertId} style={{ marginBottom: '10px' }}>
              <button onClick={() => handleSelectConcert(concert.concertId)}>
                {concert.title} - {concert.theaterName}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConcertSelectionPage;
