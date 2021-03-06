import styles from "./style.module.scss";
import Link from "next/link";
import { DetailsCard } from "../../components/DetailsCard";
import { useWindowSize } from "../../hook/UseWindowSize";

export default function index() {

const size = useWindowSize()
  return size.width < 1024 ? (
    <main>
      <div className={styles.titleContainer}>
        <Link href="/">
          <a>
            <img src="/images/arrow-left.svg" alt="Seta para voltar" />
          </a>
        </Link>
        <h1>Detalhes do colaborador</h1>
      </div>
      <DetailsCard />
    </main>
  ):(
    <main>
       <DetailsCard />
    </main>
  )
}
