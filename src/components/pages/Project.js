import styles from "./Project.module.css"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from "../layout/Loading"
import Container from "../layout/Container"

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:500/projects${id}`, {
                method: 'GET',
                Headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [id])

    function taggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }


    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>Projecto: {project.name}</h1>
                            <button className={styles.btn} onclick={taggleProjectForm}>
                                {!setShowProjectForm ? 'Editar projecto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span> Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span> Total de Orçamento: </span> KZ {project.budget}
                                    </p>
                                    <p>
                                        <span> Total utlizado: </span> KZ {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>Formulário</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project