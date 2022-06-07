import { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent";
import styles from "./style.module.scss";
import { OrganizationalData } from "../OrganizationalData";
import { employerDatails } from "../../api/connection";

type Detail = {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    type: string;
    number: string;
  };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export const DetailsCard = () => {
  const [employerDetails, setEmployerDetails] = useState<Detail>();

  useEffect(() => {
    (async () => {
      const details = (await employerDatails()).data.agent;
      setEmployerDetails(details);
    })()
  }, []);

  return employerDetails ? (
    <div className={styles.containerCardDetails}>
      <div className={styles.containerPerfil}>
        <img src={employerDetails.image} alt={employerDetails.name} />
        <div className={styles.namePerfil}>
          <h2>{employerDetails.name}</h2>
          <p>{employerDetails.email}</p>
        </div>
      </div>

      <h2>Informações pessoais</h2>
      <InputComponent
        cpf={employerDetails.document.number}
        tel={employerDetails.phone}
        birthDate={employerDetails.birth_date}
      />

      <OrganizationalData 
        id={employerDetails.id}
        department={employerDetails.department}
        role={employerDetails.role}
        status={employerDetails.status}
      />
    </div>
  ) : (
    <div>
      Loading...
    </div>
  )
}
