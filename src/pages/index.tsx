import COMPONENTS from '../components';
import styles from '../style/style.module.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Colaboradores</h1>
      <COMPONENTS.SearchEmployer />    
    </div>
  )
}

export default Home
