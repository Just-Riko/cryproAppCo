import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <h2>AppCo</h2>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </div>
    </div>
  );
};
