import TeamCard from "./TeamCard";
import styles from './Team.module.css';

function Team() {
  return (
    <>
      <h1 className={styles.teamH1}>Our Team</h1>
      <div className={styles.teamCardContainer}>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      </div>
    </>
  );
}
export default Team;
