// ✅ Header.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
  FaBars
} from "react-icons/fa";
import styles from "../styles/Header.module.css";

const Header: React.FC<{
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedUserId = localStorage.getItem("userId");
      const storedEmail = localStorage.getItem("userEmail");
      const storedUserRole = localStorage.getItem("userRole");
      if (storedUserId || storedEmail) {
        setIsLoggedIn(true);
        setUserId(storedUserId);
        setUserEmail(storedEmail);
        setUserRole(storedUserRole);
      } else {
        setIsLoggedIn(false);
        setUserId(null);
        setUserEmail(null);
        setUserRole(null);
      }
    };
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserId(null);
    setUserEmail(null);
    setUserRole(null);
    alert("로그아웃되었습니다. 다음에 또 방문해주세요!");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const displayName = userEmail ? userEmail.split("@")[0] : userId;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/withnuri-logo.png" alt="함께누리 로고" />
          </Link>
        </div>

        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          <FaBars />
        </button>

        <div className={`${styles.menuWrapper} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <ul className={styles.menu}>
            {userRole === "ADMIN" ? (
              <>
                <li><Link to="/admin/performances">공연 관리</Link></li>
                <li><Link to="/admin/reservations">예매 내역</Link></li>
                <li><Link to="/admin/users">사용자 관리</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/performances">공연</Link></li>
                <li><Link to="/booking">예매하기</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/support">고객센터</Link></li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <>
              <span className={styles.welcomeText}>
                {displayName}님 환영합니다
              </span>
              <Link to="/mypage" className={styles.profileButton} title="마이페이지">
                <FaUserCircle className={styles.profileIcon} />
              </Link>
              <button onClick={handleLogout} className={styles.logoutButton} title="로그아웃">
                <FaSignOutAlt className={styles.logoutIcon} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.loginButton} title="로그인">
                <FaUser className={styles.loginIcon} />
              </Link>
              <Link to="/signup" className={styles.signupButton} title="회원가입">
                <FaUserPlus className={styles.signupIcon} />
              </Link>
            </>
          )}

          {toggleDarkMode && (
            <button
              onClick={toggleDarkMode}
              className={styles.toggleButton}
              title="다크 모드 전환"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;