import { NavLink } from "react-router-dom";
import styles from './MainNavbar.module.css'; 
import {ReactComponent as CartIcon} from '../assets/svg/bag-heart-svgrepo-com.svg';

function MainNavbar() {
  return (
    <header>
      <nav className={styles.upperHeader}>
        <h1 className={styles.headerTitle}>Plant</h1>
        <div className={styles.navCart}>
          <NavLink to="/cart" className={styles.navlink}>
            <CartIcon className={styles.navCartIcon}/>
            <span> Cart </span>
            <span className={styles.cartQuantity}>13</span>
          </NavLink>
        </div>
      </nav>
      <nav>
        <ul className={styles.ul}>
            <li><NavLink to="/" className={styles.navlink}>Home</NavLink></li>
            <li><NavLink to="/shop" className={styles.navlink}>Shop</NavLink></li>
            <li><NavLink to="/news" className={styles.navlink}>News</NavLink></li>
            <li><NavLink to="/about" className={styles.navlink}>About</NavLink></li>
            <li><NavLink to="/contact" className={styles.navlink}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavbar;
