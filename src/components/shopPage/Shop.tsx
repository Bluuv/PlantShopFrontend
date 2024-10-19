import styles from "./Shop.module.css";
import { useAppSelector } from "../../store/hooks";
import { Product } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import axios from "axios";

function Shop() {
  const { items, status, error } = useAppSelector((state) => state.products);
  const dispatch = useDispatch();

const handleAddToCart = async (product: Product) => {
  try {
    const response = await axios.post('http://localhost:8080/addproducttocart', null, {
      params: {
        'product-id': product.id,   
        'quantity': 1               
      }
    });

    
    if (response.status === 200) {
      dispatch(addToCart(product));
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

  return (
    <div className={styles.shopContainer}>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
        {console.log(items)
        }
          <h2>Products</h2>
          <hr></hr>
          <div className={styles.productsContainer}>
            {items?.map(product => (
                <div key = {product.id} className={styles.product}>
                    <img src={product.photo} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <div className={styles.productDetails}>
                        <span>{product.description}</span>
                        <span className={styles.productPrice}>${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Shop;
