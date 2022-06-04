import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.userIcon}>LZ</div>
      <div className={styles.logoContainer}>
        <img src="/images/brand.svg" alt="Logo PedidoPago" />
      </div>
    </header>
  );
}
