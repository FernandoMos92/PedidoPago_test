import styles from "./style.module.scss";

export default function NewPosition() {
  return (
    <div className={styles.positionContainer}>
      <div className={styles.topContainer}>
        <span>
          <img src="/images/arrow-left.svg" alt="Arrow left" />
        </span>
        <h1>Novo cargo</h1>
      </div>

    </div>
  );
}
