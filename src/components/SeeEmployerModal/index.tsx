import Link from "next/link";
import styles from "./style.module.scss";

export const SeeEmployerModal = () => {
  return (
    <div className={styles.modalEmployer}>
      <Link href="/employer-details">
        <a>
          <div>
            <img src="/images/eye.svg" alt="Icon eye" />
            <p>Ver colaborador</p>
          </div>
        </a>
      </Link>
      <div>
        <img src="/images/trash-2.svg" alt="Icon trash" />
        <p>Excluir</p>
      </div>
    </div>
  );
};
