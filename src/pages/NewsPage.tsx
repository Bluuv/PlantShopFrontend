import styles from "./GeneralStyles.module.css";


function NewsPage() {
    return (
      <div className={styles.news}>
        <h1>No news at the moment</h1>
        <h4>Please try again later</h4>
      </div>
    );
  }
  
  export default NewsPage;
  