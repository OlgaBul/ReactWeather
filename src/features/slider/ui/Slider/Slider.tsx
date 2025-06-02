import { WeatherCard } from "@/entities/weather";
import styles from "./styles.module.css";
import arrow from "@/shared/assets/arrow.png";

const Slider = () => {

  return (
    <div className={styles.container}>
      <div className={styles.card_left}></div>
      <button className={styles.arrow}>
        <img src={arrow} alt="arrow" />
      </button>
      <WeatherCard />
      <button className={styles.arrow}>
        <img className={styles.arrow_right} src={arrow} alt="arrow" />
      </button>
      <div className={styles.card_right}></div>
    </div>
  );
};

export default Slider;
