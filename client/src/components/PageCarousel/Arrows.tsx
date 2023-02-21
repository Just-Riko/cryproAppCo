import prevDisabled from "../../assets/prevArrowDisabled.svg";
import nextActive from "../../assets/nextArrowActive.svg";
import styles from "./styles.module.scss";

interface IProps {
  active: boolean;
}

export const PrevArrow = ({active}: IProps) => {
  return active ? <img src={nextActive} className={styles.rotate} /> : <img src={prevDisabled} />
}

export const NextArrow = ({active}: IProps) => {
  return active ? <img src={nextActive} /> : <img src={prevDisabled} className={styles.rotate} />
}