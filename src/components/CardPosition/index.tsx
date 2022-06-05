import {useState} from 'react';
import styles from './style.module.scss';
import { FiChevronDown } from "react-icons/fi";

export function CardPosition() {

  const [isDrop, setIsDrop] = useState(true)

  return isDrop ? (
    <div className={styles.cardPositionDrop}>

      <section className={styles.topContainer}>
        <div>
          <h5>Cargo</h5>
          <p>Analista</p>
        </div>
        <div>
          <h5>Departamento</h5>
          <p>SAC</p>
        </div>
        <FiChevronDown 
          onClick={ () => setIsDrop(!isDrop)}
        />
      </section>

      <section className={styles.bottomContainer}>
        <h5>Colaboradores</h5>
        <p>2</p>
        <button>
          <img src="/images/file-plus.svg" alt=""/>
          Ações
        </button>
      </section>
    </div>
  ) : (
    <div className={styles.cardPosition}>
      <div>
        <h5>Cargo</h5>
        <p>Analista</p>
      </div>

      <FiChevronDown 
        onClick={ () => setIsDrop(!isDrop)}
      />
    </div>
  )
}