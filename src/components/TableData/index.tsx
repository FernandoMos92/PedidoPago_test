import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { allEmployer, positionList} from "../../api/connection";

export default function TableData() {
  const [arrayData, setArrayData] = useState([]);
  const [page, setPage] = useState([]);
  const { pathname } = window.location;

  useEffect(() => {
    async function resultResponse() {
      const result = await allEmployer();
      const { items } = result.data;
      setArrayData(items.slice(0, 6));
    }
    resultResponse();
  }, []);

  return (
    <table 
      className={styles.tbData}
          style={pathname === '/invitation-list' ? 
          {height:"840px", gap:"20px"} : {height: "840px", gap:"40px"}}
    >
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
              : { border: "none" }
          }
        >
          <Link href="/invitation-list">
            <a>Cargos</a>
          </Link>
        </div>
      </nav>

      <div className={styles.searchContainer}>
        <input type="text" name="" placeholder="Pesquise por cargos" />
        <p>Pesquise por colaboradores</p>
        <FiSearch className={styles.iconSearch} />
      </div>

      <h2 className={styles.titleTable}>
        {pathname === '/' ? 'Listagem de colaboradores' : 'Listagem de cargos'}
      </h2>

      <thead className={styles.tbHeader}>
        {pathname === "/" ? (
          <tr>
            <td>Nome completo</td>
            <td>Departamento</td>
            <td>Cargo</td>
            <td>Unidade</td>
            <td>Status</td>
          </tr>
        ) : (
          <tr>
            <td>Cargo</td>
            <td>Departamento</td>
            <td>Colaboradores</td>
          </tr>
        )}
      </thead>
      <tbody className={styles.tbBody}>
        {arrayData.map((employer: any) => {
          return (
            <tr className={styles.trBody}>
              <td>
                <div>
                  <img src={employer.image} alt={employer.name} />
                  <p>{employer.name}</p>
                </div>
              </td>
              <td>{employer.department}</td>
              <td>{employer.role}</td>
              <td>{employer.branch}</td>
              <td>
                <span
                  style={
                    employer.status === "inactive"
                      ? { backgroundColor: "#EAEFED", color: "#34423D" }
                      : { backgroundColor: "#B5F1DD", color: "#34423D " }
                  }
                >
                  {employer.status}
                </span>
                <img src="/images/more-vertical.svg" alt="More Vertical" />
              </td>
            </tr>
          );
        })}
        <div className={styles.tbFooter}>
          <div className={styles.infoContainer}>
            <p>
              Mostrando {page.length} de {arrayData.length} registros
            </p>
            <select>
              {arrayData.map((employer, index) => {
                return <option key={employer}>{index + 1}</option>;
              })}
            </select>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.arrowLeft}>
              <img src="/images/left-arrow.svg" alt="" />
            </button>
            1 de {Math.ceil(arrayData.length / 6)}
            <button className={styles.arrowRight}>
              <img src="/images/right-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </tbody>
    </table>
  );
}
