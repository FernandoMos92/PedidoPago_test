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

        <h3 className={styles.headerBottom}>Listagem de cargos</h3>

        <table className={styles.tableData}>
          <thead>
            <tr>
              <th>Cargo</th>
              <th>Ler</th>
              <th>Editar</th>
              <th>Comentar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Pedidos</td>
              <td>
                <input
                  className={styles.checkBox}
                  type="checkbox" 
                  name="" 
                  id="" 
                />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>

            <tr>
              <td>Clientes</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Financeiro</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Catálogo</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Colaboradores</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Funções</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>lojas</td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
