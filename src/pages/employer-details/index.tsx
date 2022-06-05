import styles from "./style.module.scss";
import Link from "next/link";
import COMPONENTS from "../../components";

export default function index() {
  return (
    <div>
      <div className={styles.titleContainer}>
        <Link href="/">
          <a>
            <img src="/images/arrow-left.svg" alt="Seta para voltar" />
          </a>
        </Link>
        <h1>Detalhes do colaborador</h1>
      </div>
      <COMPONENTS.CardDetails />
    </div>
  );
}
