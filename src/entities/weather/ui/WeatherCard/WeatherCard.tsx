import styles from "./styles.module.css";
import Geotagging from "@/shared/assets/icon_location.png";
import Favourite from "@/shared/assets/love.png";
import NotFavourite from "@/shared/assets/nolove.png";
import thermometer from "@/shared/assets/icon_temperature.png";
import { formatDate } from "@/shared/helpers/formatDate";
import { useState } from "react";

const WeatherCard = () => {
  const [favourite, setFavourite] = useState(false);

  // const icon = ;

  const changeHeart = () => {
    setFavourite(prev => !prev)
  }

  return (
    <div className={styles.card}>
      <div className={styles.city}>
        <p className={styles.city_name}>Burdwan</p>
        <img
          src={Geotagging}
          alt="Geotagging"
          className={styles.city_img_geo}
        />
        <button onClick={changeHeart} className={styles.city_btn}>
          {favourite ? (
            <img
              src={Favourite}
              alt="Favourite"
              className={styles.city_img_favourite}
            />
          ) : (
            <img
              src={NotFavourite}
              alt="NotFavourite"
              className={styles.city_img_favourite}
            />
          )}
        </button>
      </div>
      <div className={styles.weather}>
        <p className={styles.weather_data}>{formatDate(new Date())}</p>
        <div className={styles.weather_temp}>
          <img src={thermometer} alt="thermometer" />
          <p>27°C</p>
          <img src={null} alt="weather" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_item}>
          <p>Humidity</p>
          <p>99%</p>
        </div>
        <div className={styles.info_item}>
          <p>Visiblity</p>
          <p>8km</p>
        </div>
        <div className={styles.info_item}>
          <p>Air Pressure</p>
          <p>1005hPa</p>
        </div>
        <div className={styles.info_item}>
          <p>Wind</p>
          <p>2mph</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
