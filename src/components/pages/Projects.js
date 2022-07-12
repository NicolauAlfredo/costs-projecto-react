import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"

import Container from '../layout/Container'
import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setremoveLoading] = useState(false)

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    setProjects(data)
                    setremoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1> Meus Projectos </h1>
                <LinkButton to="/NewProject" text="Criar Projecto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    )}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length == 0 &&
                    <p>Não há projectos cadastrados!</p>
                }
            </Container>
        </div>
    )
}

export default Projects