import { formatTime } from "@/shared/helpers/formatTime";
import styles from "./styles.module.css";
import logo from "@/shared/assets/Group 48.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.img}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.nav}>
        <NavLink to={'/'} className={styles.title}>WeatherMe</NavLink>
        <p className={styles.time}>{formatTime(currentTime)}</p>
        <div className={styles.links}>
          <NavLink to='/history' className={styles.history}>History of search</NavLink>
          <NavLink to='/favourites' className={styles.history}>Favourites</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
