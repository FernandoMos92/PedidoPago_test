import { useState } from "react";
import styles from "./style.module.scss";

import { FiChevronDown } from "react-icons/fi";
import { AiFillFileAdd } from "react-icons/ai";

export function CardEmployer() {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div className={isDrop ? styles.cardContainerDrop : styles.cardContainer}>
      <div>
        <h4>Nome completo</h4>
        <span>
          <img src="https://picsum.photos/200" alt="Foto do usuário" />
          <p>Fernando Mós Pereira</p>
        </span>
        <FiChevronDown
          onClick={() => setIsDrop(!isDrop)}
          className={styles.iconArrowDown}
        />
      </div>

      {isDrop && (
        <>
          <div className={styles.gridContainer}>

            <div>
              <h4>Departamento</h4>
              <p>Administrativo</p>
            </div>

            <div>
              <h4>Cargo</h4>
              <p>Diretor</p>
            </div>

            <div>
              <h4>Unidade</h4>
              <p>123456789</p>
            </div>

            <div>
              <h4>Unidade</h4>
              <p>Quartel General</p>
            </div>
            
          </div>

          <div className={styles.activeUser}>
            <h4>Status</h4>
            <span>Ativo</span>
          </div>

          <button>
            <AiFillFileAdd className={styles.addFile} />
            Ações
          </button>
        </>
      )}
    </div>
  );
}
