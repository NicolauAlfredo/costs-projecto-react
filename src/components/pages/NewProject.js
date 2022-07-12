import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {

        // Initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // Redirect 
                navigate('/projects', { message: 'Projecto criado com sucesso!' })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1> Criar Projecto </h1>
            <p> Crie o seu projecto para depois adicionar os serviços </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projecto" />
        </div>
    )
}

export default NewProject