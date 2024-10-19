import React from "react";
import styles from "./Banner.module.css";
import { NavLink } from "react-router-dom";

const ButtonMain: React.FC<{ title: string }> = (props) => {
  return (
    <NavLink to="/shop/product" className={styles.pill}>
      {props.title}
    </NavLink>
  );
};

export default ButtonMain;
