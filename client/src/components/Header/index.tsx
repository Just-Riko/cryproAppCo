import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>AppCo</h1>
      </div>
    </div>
  );
}