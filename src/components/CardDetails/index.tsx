import { InputComponent } from "../InputComponent";
import styles from "./style.module.scss";
import { OrganizationalData } from "../OrganizationalData";

export function CardDetails() {
  return (
    <div className={styles.containerCardDetails}>
      <div className={styles.containerPerfil}>
        <img src="https://picsum.photos/200" alt="Foto do usuário" />
        <div className={styles.namePerfil}>
          <h2>Shinji Ikari</h2>
          <p>shinjiikari@gamil.com</p>
        </div>
      </div>

      <h2>Informações pessoais</h2>
      <InputComponent
        cpf="42582167800"
        tel="+5541996516296"
        birthDate="13/07/1992"
      />
      
      <OrganizationalData />
    </div>
  );
}
