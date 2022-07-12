import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1> Criar Projecto </h1>
            <p> Crie o seu projecto para depois adicionar os serviços </p>
            <ProjectForm />
        </div>
    )
}

export default NewProject