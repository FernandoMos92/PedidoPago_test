import styles from './style.module.scss';

export function OrganizationalData() {
  return (
    <div className={styles.containerOrganizational}>
      <h2>Dados organizacionais</h2>

      <section>
        <p>Departamento</p>

        <select className={styles.selectOptions}>
          <option value="Comercial">Comercial</option>
          <option value="Garantia de qualidade">Garantia de qualidade</option>
          <option value="SAC">SAC</option>
          <option value="Eventos">Eventos</option>
          <option value="Produtivo">Produtivo</option>
          <option value="Marketing">Marketing</option>
          <option value="Visitação Medica">Visitação Médica</option>
          <option value="Expedicao">Expedição</option>
        </select>
      </section>

      <section >
        <p>Cargo</p>
        <select className={styles.selectOptions}>
          <option value="Gerente">Gerente</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Analista">Analista</option>
        </select>
      </section>

      <section>
        <p>Unidade</p>
        <select className={styles.selectOptions}>
          <option value="Unidade 1">Unidade 1</option>
          <option value="Unidade 2">Unidade 2</option>
          <option value="Unidade 3">Unidade 3</option>
        </select>
      </section>

      <section>
        <p>Status</p>
        <select className={styles.selectOptions}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </section>

    </div>
  )
}