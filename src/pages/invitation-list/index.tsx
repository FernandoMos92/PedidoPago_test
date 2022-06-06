import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import COMPONENTS from "../../components";

export default function EmployerPosition() {
  return (
    <div className={styles.mainContainer}>
      <h2>Colaboradores</h2>

      <section className={styles.searchContainer}>
        <img src="/images/more-vertical.svg" alt="" />
        <select name="" id="">
          <option value="">Colaboradores</option>
          <option value="">Cargos</option>
        </select>

        <div className={styles.inputContainer}>
          <span>Pesquisar por</span>
          <FiSearch className={styles.searchIcon} />
          <input type="text" name="" placeholder="Pesquise por nome ou cpf" />
        </div>

        <hr className={styles.horizonLine} />

        <h4>Listagem de cargos</h4>

        <section className={styles.cardContainer}>
          <COMPONENTS.PositionCard />
          <COMPONENTS.PositionCard />
          <COMPONENTS.PositionCard />
          <COMPONENTS.PositionCard />
        </section>

        <button>
          <img 
            alt=""
            className={styles.iconRefreshButton} 
            src="/images/refresh-ccw.svg" 
          />
          Carregar mais
        </button>
      </section>
    </div>
  );
}
