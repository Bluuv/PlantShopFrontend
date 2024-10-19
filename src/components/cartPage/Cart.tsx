import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";  
import { addToCart, removeFromCart, decreaseCart, clearCart, fetchCart } from "../../store/cartSlice";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";  
import { Product } from "../../store/productsSlice";

function Cart() {
  const cart = useAppSelector((state) => state.cart);  
  const dispatch = useAppDispatch();  

  
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveFromCart = async (cartItem: Product) => {
    try {
      
        await axios.delete('http://localhost:8080/removeproductfromcart', {
        params: { 'product-id': cartItem.id }
      });
      dispatch(removeFromCart(cartItem));  
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  }

  const handleDecreaseCart = async (cartItem: Product) => {
    try {
      
        await axios.post('http://localhost:8080/decrementproduct', null, {
        params: { 'product-id': cartItem.id }
      });
      dispatch(decreaseCart(cartItem));  
    } catch (error) {
      console.error("Error decreasing product quantity in cart:", error);
    }
  }

  const handleAddToCart = async (cartItem: Product) => {
    try {
      
        await axios.post('http://localhost:8080/incrementproduct', null, {
        params: { 'product-id': cartItem.id }
      });
      dispatch(addToCart(cartItem));  
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }

  const handleClearCart = async () => {
    try {
      
      await axios.delete('http://localhost:8080/clearcart');
      dispatch(clearCart());  
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }

  const handleCheckout = async () => {
    try {
      
      const response = await axios.post('http://localhost:8080/checkout');
      alert(response.data);  
      dispatch(clearCart());  
    } catch (error: any) {
      console.error("Error during checkout:", error);
      alert("Checkout failed: " + error.response?.data || "Unknown error");
    }
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className={styles.cartEmpty}>
          <p>Your cart is currently empty</p>
          <div className={styles.startShopping}>
            <Link to="/shop/product">
              <span> Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.cartTitles}>
            <h3 className={styles.cartProductTitle}>Product</h3>
            <h3 className={styles.cartPrice}>Price</h3>
            <h3 className={styles.cartQuantity}>Quantity</h3>
            <h3 className={styles.cartTotal}>Total</h3>
          </div>
          <div className={styles.CartItems}>
            {cart.cartItems?.map((cartItem: any) => (
              <div className={styles.cartItem} key={cartItem.product.id}>
                <div className={styles.cartProduct}>
                  <img src={cartItem.product.photo} alt={cartItem.product.name} />
                  <div>
                    <h3>{cartItem.product.name}</h3>
                    <p>{cartItem.product.description}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem.product)}>Remove</button>
                  </div>
                </div>
                <div className={styles.cartProductPrice}>${cartItem.product.price}</div>
                <div className={styles.cartProductQuantity}>
                  <button onClick={() => handleDecreaseCart(cartItem.product)}>-</button>
                  <div className={styles.cartCount}>
                    {cartItem.quantity}  {/* Display quantity from the ProductInCartDTO */}
                  </div>
                  <button onClick={() => handleAddToCart(cartItem.product)}>+</button>
                </div>
                <div className={styles.cartProductTotalPrice}>
                  ${cartItem.product.price * cartItem.quantity}  {/* Calculate total price per product */}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <button className={styles.clearCart} onClick={() => handleClearCart()}>Clear Cart</button>
            <div className={styles.cartCheckOut}>
              <div className={styles.cartSubtotal}>
                <span>Subtotal</span>
                <span className={styles.cartAmmount}>
                  ${cart.cartTotalAmount}
                </span>
              </div>
              <button onClick={handleCheckout}>Check Out</button>  {/* Call handleCheckout on click */}
              <div className={styles.continueShopping}>
                <Link to="/shop/product">
                  <span> Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
