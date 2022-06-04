import styles from '../style/style.module.scss';

import { FiSearch } from 'react-icons/fi';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Colaboradores</h1>

      <div className={styles.searchContainer}>
        <section>
          <select name="" id="">
            <option value="">Colaboradores</option>
            <option value="">Cargos</option>
          </select>
          <span>Pesquisar por</span>
          <FiSearch className={styles.searchIcon}/>
          <input 
            type="text" 
            name=""
            placeholder="Pesquise por nome ou cpf"  
          />
        </section>
      </div>
    </div>
  )
}

export default Home
