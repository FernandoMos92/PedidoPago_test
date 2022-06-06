import { useState } from "react";
import styles from "./style.module.scss";

import { FiChevronDown } from "react-icons/fi";
import COMPONENTS from "..";

export function CardEmployer() {
  const [isDrop, setIsDrop] = useState(false);
  const [isModal, setIsModal] = useState(false);

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

          {!isModal ? (
            <button onClick={() => setIsModal(!isModal)}>
              <img src="/images/file-plus.svg" alt="Icon file plus" />
              Ações
            </button>
          ) : (
            <span
              onClick={ () => setIsModal(!isModal) } 
            >
              <COMPONENTS.ModalSeeEmployer />
            </span>
          )}
        </>
      )}
    </div>
  );
}
