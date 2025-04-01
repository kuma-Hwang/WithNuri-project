// ✅ Layout.tsx
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import classNames from "classnames";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={classNames(styles.layout, { [styles.dark]: darkMode })}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;