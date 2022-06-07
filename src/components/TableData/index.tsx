import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { allEmployer } from "../../api/connection";

export default function TableData() {
  const [employers, setEmployers] = useState([]);
  const [page, setPage] = useState([]);
  const { pathname } = window.location;

  useEffect(() => {
    async function resultResponse() {
      const result = await allEmployer();
      const { items } = result.data;
      setEmployers(items);
    }
    resultResponse();
    pagination();
  }, []);

  const pagination = () => {
    if(employers.length !== 0) {
      const newArr = employers.slice(0, 6);
      setPage(newArr);
    }
  };

  console.log(page);

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

      <h2 className={styles.titleTable}>Listagem de cargos</h2>

      <thead className={styles.tbHeader}>
        <tr>
          <td>Nome completo</td>
          <td>Departamento</td>
          <td>Cargo</td>
          <td>Unidade</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody className={styles.tbBody}>
        {page.length !== 0 ? (
          page.map((employer: any) => {
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
          })
        ) : (
          <div>Loading...</div>
        )}
        <div className={styles.tbFooter}>
          <div className={styles.infoContainer}>
            <p>
              Mostrando {page.length} de {employers.length} registros
            </p>
            <select>
              {employers.map((employer, index) => {
                return <option key={employer}>{index + 1}</option>;
              })}
            </select>
          </div>
          <div className={styles.buttonContainer}>
          <button className={styles.arrowLeft}>
            <img src="/images/left-arrow.svg" alt="" />
          </button>
          1 de {Math.ceil(employers.length/6)}
          <button className={styles.arrowRight}>
            <img src="/images/right-arrow.svg" alt="" />
          </button>
        </div>
        </div>
      </tbody>
    </table>
  );
}
