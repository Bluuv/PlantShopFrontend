
import { NavLink, useNavigate } from "react-router-dom";
import styles from './MainNavbar.module.css'; 
import { ReactComponent as CartIcon } from '../assets/svg/bag-heart-svgrepo-com.svg';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/LoginSlice";
import axios from "axios";
import { clearCart } from "../store/cartSlice";
function MainNavbar() {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    
    const { cartTotalQuantity } = useSelector((state: any) => state.cart);
    const { username, isLoggedIn } = useSelector((state: any) => state.login); 

    const handleLogout = async () => {
      try {
          
          const response = await axios.get('http://localhost:8080/shop/logout');
  
          if (response.status === 200) {
              dispatch(logout()); 
              dispatch(clearCart()); 
              navigate("/"); 
          } else {
              console.error("Logout failed with status:", response.status);
          }
      } catch (error) {
          console.error("Error during logout:", error);
      }
  };

    return (
        <header>
            <nav className={styles.upperHeader}>
                <h1 className={styles.headerTitle}>Plant</h1>
                <div className={styles.navCart}>
                    <NavLink to="/cart" className={styles.navlink}>
                        <CartIcon className={styles.navCartIcon}/>
                        <span> Cart </span>
                        <span className={styles.cartQuantity}>{cartTotalQuantity}</span>
                    </NavLink>
                    {isLoggedIn ? ( 
                        <>
                            <span className={styles.auth}>{username}</span>
                            <span 
                                className={styles.auth} 
                                style={{ cursor: 'pointer' }} 
                                onClick={handleLogout} 
                            >
                                Logout
                            </span>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={styles.auth}>
                                <span> Login </span>
                            </NavLink>
                            <NavLink to="/signup" className={styles.auth}>
                                <span> Sign Up </span>
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
            <nav>
                <ul className={styles.ul}>
                    <li><NavLink to="/" className={styles.navlink}>Home</NavLink></li>
                    <li><NavLink to="/shop/product" className={styles.navlink}>Shop</NavLink></li>
                    <li><NavLink to="/news" className={styles.navlink}>News</NavLink></li>
                    <li><NavLink to="/about" className={styles.navlink}>About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavbar;
