import { Triangle } from "react-loader-spinner";
import styles from "./styles.module.scss";

export const Spinner = () => {
  return <div className={styles.spinner}>
  <Triangle
    height="80"
    width="80"
    color="#3a80ba"
  />
</div>
}