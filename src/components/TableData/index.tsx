import styles from "./style.module.scss";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function TableData() {
  const { pathname } = window.location;

  return (
    <table className={styles.tbData}>
      <nav>
        <div
          style={
            pathname === "/"
              ? { borderBottom: "2px solid #22E0A1", padding: "7px" }
              : { borderBottom: "2px solid #EAEFED" }
          }
        >
          <Link href="/">
            <a>Colaboradores</a>
          </Link>
        </div>
        <div
          style={
            pathname === "/invitation-list"
              ? { borderBottom: "2px solid #22E0A1", padding: "7px" }
              : { border: 'none' }
          }
        >
          <Link href="/invitation-list">
            <a>Cargos</a>
          </Link>
        </div>
      </nav>

      <div className={styles.searchContainer}>
        <input 
          type="text" 
          name=""
          placeholder="Pesquise por cargos"
        />
        <p>Pesquise por cargos</p>
        <FiSearch 
          className={styles.iconSearch}
        />
      </div>

      <thead className={styles.tbHeader}></thead>
    </table>
  );
}
