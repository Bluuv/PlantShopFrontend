import bannerImg from "../../assets/images/vision4.jpg";
import styles from "./Banner.module.css";
import ButtonMain from "./ButtonMain";

function Banner() {
    console.log(styles.pill);
    
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
          <img
            src={bannerImg}
            alt="Main Page Image"
            className={styles.bannerimg}
          />
          <p className={styles.promotxtSmall}>Bring Freshness to your Architecture</p>
          <h1 className={styles.promotxt}>PLANTS FOR INTERIOR</h1>
          <ButtonMain title="Shop Now"/>
      </div>
    </div>
  );
}

export default Banner;
