import React from "react";
import styles from "./Banner.module.css";

const ButtonMain: React.FC<{ title: string }> = (props) => {
  return (
    <button type="button" className={styles.pill}>
      {props.title}
    </button>
  );
};

export default ButtonMain;
