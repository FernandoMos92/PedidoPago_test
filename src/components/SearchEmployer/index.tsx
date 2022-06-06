import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import { CardEmployer } from "../CardEmployer";
import RESPONSE from '../../api/connection';
import { type } from "os";


export type Employer = {
  agent_id: number,
  name: string,
  image: string,
  department: string,
  branch: string,
  role: string,
  status: string,
}

export function SearchEmployer() {

  const [employers, setEmployer] = useState<Employer[]>([]);

  useEffect(() => {
    async function resultResponse() {
      const result = await RESPONSE.allEmployer();
      const {items} = result.data;
      setEmployer(items)
    }
    resultResponse();
  }, []);

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
        {
          employers.map((employer) => (
            <CardEmployer 
              key={employer.agent_id}
              employer={employer}
            />
          ))
        }
        <button className={styles.btnMore}>
          <img src="/images/refresh-ccw.svg" alt="Refresh logo" />
          Carregar mais
        </button>
      </section>
    </div>
  );
}
