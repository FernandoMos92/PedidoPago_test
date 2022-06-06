import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import { EmployerCard } from "../EmployerCard";
import { allEmployer } from "../../api/connection";
import InfiniteScroll from "react-infinite-scroller";

export type Employer = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export function SearchEmployer() {
  const [allEmployers, setAllEmployers] = useState<Employer[]>([]);
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [isLoadingEmployersOnce, setisLoadingEmployersOnce] = useState(true);
  const [hasMoreEmployers, setHasMoreEmployers] = useState(true);

  useEffect(() => {
    async function resultResponse() {
      const result = await allEmployer();
      const { items } = result.data;
      setAllEmployers(items);
      setisLoadingEmployersOnce(false);
    }
    resultResponse();
  }, []);

  const loadMoreEmployers = (page: any) => {
    const start = 0;
    const end = start + page * 6;
    const totalPages = Math.ceil(allEmployers.length / 6);
    const hasMoreEmployersToLoad = page < totalPages;
    setHasMoreEmployers(hasMoreEmployersToLoad);
    const newEmployers = allEmployers.slice(start, end);
    setEmployers(newEmployers);
  };

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
        {isLoadingEmployersOnce ? (
          <button className={styles.btnMore}>
            <img src="/images/refresh-ccw.svg" alt="Refresh logo" />
            Carregar mais
          </button>
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreEmployers}
            hasMore={hasMoreEmployers}
            loader={
              <button 
                className={styles.btnMore}
                key={employers.length}
              >
                <img src="/images/refresh-ccw.svg" alt="Refresh logo" />
                Carregar mais
              </button>
            }
          >
            {
            employers.map((employer, index) => (
              <EmployerCard 
                key={index} 
                employer={employer} 
              />
            ))}
          </InfiniteScroll>
        )}
      </section>
    </div>
  );
}
