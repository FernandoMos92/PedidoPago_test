import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import { CardEmployer } from "../CardEmployer";

export function SearchEmployer() {
  return (
    <div className={styles.searchContainer}>
      <section>
        <select name="" id="">
          <option value="">Colaboradores</option>
          <option value="">Cargos</option>
        </select>

        <div className={styles.inputContainer}>
          <span>Pesquisar por</span>
          <FiSearch className={styles.searchIcon} />
          <input type="text" name="" placeholder="Pesquise por nome ou cpf" />
        </div>

      </section>
      <hr className={styles.horizonLine} />

      <section className={styles.cardContainer}>
        <h2>Listagem de colaboradores</h2>
        <CardEmployer />
        <CardEmployer />
        <CardEmployer />
        <CardEmployer />
        <button className={styles.btnMore}>
          <img src="/images/refresh-ccw.svg" alt="Refresh logo" />
          Carregar mais
        </button>
      </section>
    </div>
  );
}
