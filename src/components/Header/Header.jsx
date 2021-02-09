import React from "react";
import styles from "./Header.module.scss";
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <header className={styles.center}>
      <img src={logo} alt="logo"/>
    </header>
  );
};

export default Header;
