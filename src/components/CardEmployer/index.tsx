import styles from "./style.module.scss";

import { FiChevronDown } from 'react-icons/fi';

export function CardEmployer() {
  return (
    <div className={styles.cardContainer}>

      <div>
        <h4>Nome completo</h4>
        <span>
          <img src="https://picsum.photos/200" alt="" />
          <p>Fernando Mós Pereira</p>
        </span>
        <FiChevronDown className={styles.iconArrowDown}/>
      </div>
      
    </div>
  );
}
