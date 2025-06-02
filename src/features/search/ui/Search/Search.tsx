import styles from "./styles.module.css";
import searchImg from "@/shared/assets/icon_search.jpg";

const Search = () => {
  return (
    <div className={styles.search}>
      <img src={searchImg} alt="search" className={styles.search_img}/>
      <input
        type="text"
        className={styles.input}
        placeholder="Search location..."
      />
    </div>
  );
};

export default Search;
