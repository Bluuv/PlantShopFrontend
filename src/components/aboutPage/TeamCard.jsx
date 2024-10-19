import styles from "./Team.module.css";
import visionImg from "../../assets/images/team.jpg";

function TeamCard() {
  return (
    <>
      <div className={styles.teamCard}>
            <img src={visionImg} className={styles.teamPhoto} />
        <h2>John Smith</h2>
        <p>Plant Health Expert</p>
        <br /><br /><br /><br /><br />
      </div>
    </>
  );
}
export default TeamCard;
