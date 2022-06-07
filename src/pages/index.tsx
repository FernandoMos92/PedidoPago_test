import COMPONENTS from "../components";
import styles from "../style/style.module.scss";
import { useWindowSize } from "../hook/UseWindowSize";

const Home = () => {
  const size = useWindowSize();

  return size.width >= 1024 ? (
      <COMPONENTS.SearchEmployer />
  ) : (
    <div className={styles.homeContainer}>
      <h1>Colaboradores</h1>
      <COMPONENTS.SearchEmployer />
    </div>
  );
};

export default Home;
