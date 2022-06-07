import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import COMPONENTS from "../../components";
import { useWindowSize } from "../../hook/UseWindowSize";
import TableData from "../../components/TableData";

export default function EmployerPosition() {

  const size = useWindowSize();

  return size.width >= 1024 ? (
    <main className={styles.mainContainer}>
    <aside></aside>

    <section className={styles.dashBoadContainer}>
      <h1 className={styles.titleContainer}>Organização</h1>
      <TableData />
    </section>

  </main>):(
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
