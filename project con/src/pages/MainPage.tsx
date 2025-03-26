// src/pages/MainPage.tsx
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>🎉 함께누리 메인페이지입니다!</h1>
      <nav>
        <Link to="/concerts">공연 보기</Link> |{' '}
        <Link to="/booking">손쉬운 예매</Link> |{' '}
        <Link to="/login">로그인</Link>
      </nav>
    </div>
  );
};

export default MainPage;
