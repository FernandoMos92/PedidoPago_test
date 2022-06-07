import styles from "./style.module.scss";

type DataUser = {
  cpf: string;
  tel: {
    ddd: string;
    ddi: string;
    number: string;
  };
  birthDate: string;
};

export function InputComponent({ cpf, tel, birthDate }: DataUser) {
  const formateDate = (birthDate: string): string => {
    const date = new Date(birthDate);
    return `${date.toLocaleDateString()}`;
  };

  const formateDocument = (cpf: string): string => {
    const CPF = `${cpf.slice(0, 3)} ${cpf.slice(3, 6)} ${cpf.slice(
      6,
      9
    )} ${cpf.slice(9, 11)}`;
    return CPF;
  };

  return (
    <div className={styles.informationContainer}>
      <div className={styles.containerCpf}>
        <div className={styles.containerImage}>
          <img src="/images/id.svg" alt="id icon" />
        </div>

        <div className={styles.containerData}>
          <p>CPF</p>
          <h4>{formateDocument(cpf)}</h4>
        </div>
      </div>

      <div className={styles.containerPhone}>
        <div className={styles.containerImage}>
          <img src="/images/phone-call.svg" alt="Phone icon" />
        </div>

        <div className={styles.containerData}>
          <p>Telefone</p>
          <h4>
            +{tel.ddd} {tel.ddi} {tel.number}
          </h4>
        </div>
      </div>

      <div className={styles.containerCalendar}>
        <div className={styles.containerImage}>
          <img src="/images/calendar.svg" alt="Calendar icon" />
        </div>

        <div className={styles.containerData}>
          <p>Nascimento</p>
          <h4>{formateDate(birthDate)}</h4>
        </div>
      </div>
    </div>
  );
}
