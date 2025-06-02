import styles from "./style.module.css";

const Favourites = () => {
  return (
    <div className={styles.container}>
      <h1>Favourites:</h1>
      <ul className={styles.list}>
        <li>city one</li>
      </ul>
    </div>
  );
};

export default Favourites;
