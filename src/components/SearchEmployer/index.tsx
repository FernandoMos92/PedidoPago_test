import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FiSearch } from "react-icons/fi";
import { EmployerCard } from "../EmployerCard";
import { allEmployer } from "../../api/connection";
import InfiniteScroll from "react-infinite-scroller";
import { useWindowSize } from "../../hook/UseWindowSize";

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
  const [filterUser, setUserFilter] = useState<string>("");

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

  const inputChange = ({ target }: any) => {
    setUserFilter(target.value);
  };

  const renderEmployerFilter = allEmployers.filter((employer) => {
    if (filterUser === "") return employer;
    if (employer.name.includes(filterUser)) return employer;
  });

  const size = useWindowSize();

  return size.width >= 1024 ? (
    <main className={styles.mainContainer}>
      <aside></aside>

      <div className={styles.boardContainer}>
        <h1>Organização</h1>
        <nav className={styles.menuContainer}>
          <div>
            <a>Colabores</a>
          </div>
          <div>
            <a>Cargos</a>
          </div>
        </nav>

        <div className={styles.searchBoxContainer}>
          <span>Pesquisar por</span>
          <FiSearch className={styles.searchIconBigSize} />
          <input
            className={styles.searchBox}
            type="text"
            placeholder="Pesquise por nome ou cpf"
            name=""
            id=""
          />
        </div>

        <h2>Listagem de colaboradores</h2>

        <table>
          <thead>
            <tr>
              <td>Nome completo</td>
              <td>Departamento</td>
              <td>Cargo</td>
              <td>Unidade</td>
              <td>Status</td>
            </tr>
            <tbody>
             {
               employers.map((employer) => (
                <tr>
                  <td>
                    <div>
                      <img src={employer.image} alt={employer.name} />
                      <p>{employer.name}</p>
                    </div>
                  </td>
                  <td>
                    <p>{employer.department}</p>
                  </td>
                  <td>
                    <p>{employer.role}</p>
                  </td>
                  <td>
                    <p>{employer.branch}</p>
                  </td>
                  <td>
                    <span>
                      <p>{employer.status}</p>
                    </span>
                  </td>
                </tr>
               ))
             }
            </tbody>
          </thead>
        </table>
      </div>
    </main>
  ) : (
    <div className={styles.searchContainer}>
      <section>
        <select name="" id="">
          <option value="">Colaboradores</option>
          <option value="">Cargos</option>
        </select>

        <div className={styles.inputContainer}>
          <span>Pesquisar por</span>
          <FiSearch className={styles.searchIcon} />
          <input
            onChange={inputChange}
            type="text"
            value={filterUser}
            placeholder="Pesquise por nome ou cpf"
          />
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
              <button className={styles.btnMore} key={employers.length}>
                <img src="/images/refresh-ccw.svg" alt="Refresh logo" />
                Carregar mais
              </button>
            }
          >
            {renderEmployerFilter.map((employer, index) => (
              <EmployerCard key={index} employer={employer} />
            ))}
          </InfiniteScroll>
        )}
      </section>
    </div>
  );
}
