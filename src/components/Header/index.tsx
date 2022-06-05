import Link from "next/link";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.userIcon}>LZ</div>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <img src="/images/brand.svg" alt="Logo PedidoPago" />
          </a>
        </Link>
      </div>
    </header>
  );
}
