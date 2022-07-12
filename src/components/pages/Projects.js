import { useLocation } from 'react-router-dom'

import Message from "../layout/Message"

import Container from '../layout/Container'
import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'

function Projects() {

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1> Meus Projectos </h1>
                <LinkButton to="/NewProject" text="Criar Projecto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p> Projectos... </p>
            </Container>
        </div>
    )
}

export default Projects