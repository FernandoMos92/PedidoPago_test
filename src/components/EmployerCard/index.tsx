import { useState } from "react";
import styles from "./style.module.scss";
import { FiChevronDown } from "react-icons/fi";
import COMPONENTS from "..";
import { Employer } from "../SearchEmployer";

type CardEmployerProps = {
  employer: Employer;
}

export function EmployerCard({employer}:CardEmployerProps) {

  const [isDrop, setIsDrop] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={isDrop ? styles.cardContainerDrop : styles.cardContainer}>
      <div>
        <h4>Nome completo</h4>
        <span>
          <img src={employer.image} alt={employer.name}/>
          <p>{employer.name}</p>
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
              <p>{employer.department}</p>
            </div>

            <div>
              <h4>Cargo</h4>
              <p>{employer.role}</p>
            </div>

            <div>
              <h4>Unidade</h4>
              <p>{employer.agent_id}</p>
            </div>

            <div>
              <h4>Unidade</h4>
              <p>{employer.branch}</p>
            </div>
          </div>

          <div className={styles.activeUser}>
            <h4>Status</h4>
            <span
              style={ employer.status === 'inactive' ? {backgroundColor:'red', color: '#FFF'} 
              : { backgroundColor: '#B5F1DD', color: '#34423D ' }}
            >{employer.status}</span>
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
