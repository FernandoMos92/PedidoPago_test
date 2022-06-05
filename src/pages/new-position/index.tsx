import styles from "./style.module.scss";
import Link from "next/link";

export default function NewPosition() {
  return (
    <div className={styles.positionContainer}>
      <div className={styles.topContainer}>
        <Link href="/">
          <a>
            <span>
              <img src="/images/arrow-left.svg" alt="Arrow left" />
            </span>
          </a>
        </Link>
        <h1>Novo cargo</h1>
      </div>

      <section className={styles.mainContainer}>
        <h3>Dados do cargo</h3>

        <section className={styles.filterContainer}>
          <p>Departamento</p>
          <select>
            <option>SAC</option>
          </select>

          <section className={styles.inputContainer}>
            <p>Cargo</p>
            <input type="text" placeholder="Insira um cargo" />
          </section>
        </section>

        <hr className={styles.horizonLine} />

      </section>
    </div>
  );
}
