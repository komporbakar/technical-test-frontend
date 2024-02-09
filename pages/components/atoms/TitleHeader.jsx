import React from 'react';
import styles from "../../../styles/Home.module.scss";

export const TitleHeader = ({text}) => {
  return (
    <h5 className={styles.titleheader}>{text}</h5>
 )
}
