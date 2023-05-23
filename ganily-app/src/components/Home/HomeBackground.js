import bgImage from '../../assets/images/bg-image.jpg';
import styles from './HomeBackground.module.css'

const HomeBackground = () => {
  return (
    <div className={styles.background}>
      <img className={styles.image} src={bgImage} alt="Back ground cake" />
    </div>
  );
};

export default HomeBackground;
