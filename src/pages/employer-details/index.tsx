import styles from "./style.module.scss";
import Link from "next/link";
import { DetailsCard } from "../../components/DetailsCard";

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
      <DetailsCard />
    </div>
  );
}
