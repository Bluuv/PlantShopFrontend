import styles from "./Vision.module.css";
import visionImg from "../../assets/images/vision3.jpg";

function Vision() {
  return (
    <>
      <div className={styles.visionContainer}>
        {/* <div className={styles.centeredvision}> */}
        <div className={styles.visionText}>
          <h1>Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            suscipit deserunt, impedit pariatur fuga placeat vero quibusdam eum
            repudiandae beatae nihil nisi laboriosam quam maxime mollitia autem?
            Eum, provident voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            suscipit deserunt, impedit pariatur fuga placeat vero quibusdam eum
            repudiandae beatae nihil nisi laboriosam quam maxime mollitia autem?
            Eum, provident voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            suscipit deserunt, impedit pariatur fuga placeat vero quibusdam eum
            repudiandae beatae nihil nisi laboriosam quam maxime mollitia autem?
            Eum, provident voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            suscipit deserunt, impedit pariatur fuga placeat vero quibusdam eum
            repudiandae beatae nihil nisi laboriosam quam maxime mollitia autem?
            Eum, provident voluptates.
          </p>
        </div>
        <div className={styles.visionImgContainer1}>
            <img src={visionImg} className={styles.visionImg} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Vision;
