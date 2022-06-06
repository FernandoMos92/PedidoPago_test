import styles from './style.module.scss';

export function ModalSeeEmployer() {
  return ( 
    <div className={styles.modalEmployer}>
      <div>
        <img 
          src="/images/eye.svg" 
          alt="Icon eye" 
        />
        <p>Ver colaborador</p>
      </div>
        <div>
        <img 
          src="/images/trash-2.svg" 
          alt="Icon trash" 
        />
          <p>Excluir</p>
        </div>
    </div>
  )
}