import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1> Bem-vindo ao <span>Costs</span> </h1>
            <p> Comece a gerenciar os seus projectos agora mesmo! </p>
            <LinkButton to="/newProject" text="Criar Projecto" />
            <img src={savings} alt="savings" />
        </section>
    )
}

export default Home

