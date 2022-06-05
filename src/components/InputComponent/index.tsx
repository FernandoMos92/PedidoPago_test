import styles from "./style.module.scss";

interface DataUser {
  cpf: number|string;
  tel: string;
  birthDate: string;
}

export function InputComponent({ cpf, tel, birthDate }: DataUser) {
  return (
    <div>
      
      <div className={styles.containerCpf}>
        <div className={styles.containerImage}>
          <img src="/images/id.svg" alt="id icon" />
        </div>

        <div className={styles.containerData}>
          <p>CPF</p>
          <h4>{cpf}</h4>
        </div>
      </div>

      <div className={styles.containerPhone}>
        <div className={styles.containerImage}>
          <img src="/images/phone-call.svg" alt="Phone icon" />
        </div>

        <div className={styles.containerData}>
          <p>Telefone</p>
          <h4>{tel}</h4>
        </div>
      </div>

      <div className={styles.containerCalendar}>
        <div className={styles.containerImage}>
          <img src="/images/calendar.svg" alt="Calendar icon" />
        </div>

        <div className={styles.containerData}>
          <p>Nascimento</p>
          <h4>{birthDate}</h4>
        </div>
      </div>
    </div>
  );
}
