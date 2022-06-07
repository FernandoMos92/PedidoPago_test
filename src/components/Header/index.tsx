import Link from "next/link";
import styles from "./style.module.scss";
import { useWindowSize } from "../../hook/UseWindowSize";

export function Header() {
  const size = useWindowSize();
  console.log("Header", size);
  return size.width >= 1024 ? (
    <header className={styles.headerContainerBigSize}>
      <Link href="/">
        <a>
          <img src="/images/brand.svg" alt="Logo PedidoPago" />
        </a>
      </Link>
      <div className={styles.userContainer}>
        <div className={styles.userIcon}>LZ</div>
        <div className={styles.nameContainer}>
          <h2>Luiz Zlochevsky</h2>
          <p>meu dados</p>
        </div>
      </div>
    </header>
  ) : (
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
