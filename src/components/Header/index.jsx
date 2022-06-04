import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.userIcon}>LZ</div>

      <div className={styles.logoContainer}>
        <img src="/images/pp-logoBack.png" alt="" />
        <img src="/images/pp-logo.png" alt="" />
      </div>
    </header>
  );
}
