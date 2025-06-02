import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1>Страница не найдена! &#129488;</h1>
      <NavLink to={"/"} className={styles.link}>
        Вернуться на главную страницу
      </NavLink>
    </div>
  );
};

export default NotFound;
