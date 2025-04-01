// ✅ Footer.tsx
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footerBottom}>
          <div className={styles.footerSite}>
            <h3>WithNuri</h3>
            <div className={styles.footerIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
            <div className={styles.footerInfo}>
              <p>📍 서울시 종로구 세종대로 110, 함께누리타워 5층</p>
              <p>📧 <a href="mailto:help@withnuri.com">help@withnuri.com</a></p>
              <p>📞 <a href="tel:027891234">02-789-1234</a></p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>회사소개</h3>
              <ul>
                <li><Link to="/about/history">회사 연혁</Link></li>
                <li><Link to="/about/team">팀 소개</Link></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>고객센터</h3>
              <ul>
                <li><Link to="/support/faq">자주 묻는 질문</Link></li>
                <li><Link to="/support/contact">1:1 문의</Link></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>이용안내</h3>
              <ul>
                <li><Link to="/guide/booking">예매 안내</Link></li>
                <li><Link to="/guide/refund">취소·환불 안내</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 WithNuri. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;