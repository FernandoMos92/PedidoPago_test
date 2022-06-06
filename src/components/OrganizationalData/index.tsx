import styles from './style.module.scss';

type Position = {
  id:number,
  department: string,
  role: string,
  status: string,
};

export function OrganizationalData({department, role, status, id}:Position) {
  return (
    <div className={styles.containerOrganizational}>
      <h2>Dados organizacionais</h2>

      <section>
        <p>Departamento</p>

        <select className={styles.selectOptions}>
          <option value="Comercial">{department}</option>
        </select>
      </section>

      <section >
        <p>Cargo</p>
        <select className={styles.selectOptions}>
          <option value="Gerente">{role}</option>
        </select>
      </section>

      <section>
        <p>Unidade</p>
        <select className={styles.selectOptions}>
          <option value="Unidade 1">Unidade {id}</option>
        </select>
      </section>

      <section>
        <p>Status</p>
        <select className={styles.selectOptions}>
          <option value={status}>{status}</option>
        </select>
      </section>

    </div>
  )
}