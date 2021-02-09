import React from "react";
import styles from "./Loading.module.scss";
import loading from '../../assets/loading.svg';

const Loading = () => {
  return (
      <img src={loading} className={styles.loading} alt='loading...' />
  );
};

export default Loading;
