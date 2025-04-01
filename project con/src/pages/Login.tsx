import { useState } from 'react';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 API 연동
    console.log('로그인 요청:', { userId, password, rememberMe });
  };

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/naver';
  };

  return (
    <div className={styles.wrapLogin}>
      <div className={styles.loginMain}>
        <h2>Login</h2>
        <h4>함께누리와 문화를 즐겨요!</h4>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <ul>
              <li>
                <h3>ID</h3>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  autoFocus
                />
              </li>
              <li>
                <h3>Password</h3>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />{' '}
                  아이디 저장
                </label>
              </li>
              <li>
                <input type="submit" value="로그인" />
              </li>

              <li className={styles.socialLogin}>
                <button
                  type="button"
                  onClick={handleKakaoLogin}
                  style={{
                    backgroundColor: '#FEE500',
                    width: '100%',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  카카오로 로그인
                </button>
                <button
                  type="button"
                  onClick={handleNaverLogin}
                  style={{
                    backgroundColor: '#03C75A',
                    color: 'white',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  네이버로 로그인
                </button>
              </li>

              <p className={styles.signup}>
                아직 회원이 아니신가요? <a href="/signup">회원가입하러가기</a>
              </p>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
