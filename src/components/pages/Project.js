import styles from "./Project.module.css"

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import Message from "../layout/Message"
import ProjectForm from "../project/ProjectForm"
function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const [showServiceForm, setShowServiceForm] = useState(false)


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

    function editPost(project) {
        setMessage = ''
        // budget validation
        if (project.budget < project.cost) {
            // Mensagem
            setMessage('O orçamento não pode ser menor do que o custo do projecto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/project/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                // Mensagem
                setMessage('Projecto actualizado!')
                setType('succes')
            })
            .catch((err) => console.log(err))
    }

    function taggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function taggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projecto: {project.name}</h1>
                            <button className={styles.btn} onclick={taggleProjectForm}>
                                {!showProjectForm ? 'Editar projecto' : 'Fechar'}
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
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Concluir edicão"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onclick={taggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {!showServiceForm && (
                                    <div>
                                        Formulário do serviço
                                    </div>
                                )}
                            </div>
                            <h2>Serviço</h2>
                            <Container customClass="start">
                                <p>Itens de serviços</p>
                            </Container>
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