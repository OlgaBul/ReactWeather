import classNames from "classnames";
import styles from "./styles.module.css";
import useToggle from "@/shared/hooks/useToggle";

const SwitcherTemp = () => {
  const [isFahrenheit, setFahrenheit] = useToggle(false);

  return (
    <div className={styles.toggle}>
      <p>°C</p>
      <div
        className={
          isFahrenheit
            ? classNames(styles.toggle_block, styles.toggle_block_right)
            : styles.toggle_block
        }
      >
        <div
          className={
            isFahrenheit
              ? classNames(styles.toggle_circle, styles.toggle_circle_right)
              : styles.toggle_circle
          }
          onClick={setFahrenheit}
        ></div>
      </div>
      <p>°F</p>
    </div>
  );
};

export default SwitcherTemp;
