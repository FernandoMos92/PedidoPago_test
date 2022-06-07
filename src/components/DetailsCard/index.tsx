import { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent";
import styles from "./style.module.scss";
import { OrganizationalData } from "../OrganizationalData";
import { employerDatails } from "../../api/connection";
import { useWindowSize } from '../../hook/UseWindowSize';

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
    async function resultResponse() {
      const response = await employerDatails();
      const result = response.data.agent;
      setEmployerDetails(result);
    }
    resultResponse()
  }, []);

  const size = useWindowSize();

  return employerDetails ? size.width >= 1024 ? (
    <p>teste</p>
  ) :(
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
