import styles from './Banner.module.css';

const Banner = ({buttonText, handleOnClick}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoiseur</span>
      </h1>
      <p className={styles.subtitle}>Discover local coffee shops near you!</p>
      <button className={styles.button} onClick={handleOnClick}>{buttonText}</button>
    </div>
  );
};

export default Banner;
