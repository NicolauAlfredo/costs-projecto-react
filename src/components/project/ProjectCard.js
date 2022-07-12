import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BsPencial, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento</span> KZ {budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles.category.toLowerCase()}`}>  </span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencial /> Editar
                </Link>
                <buttton>
                    <BsFillTrashFill /> Excluir
                </buttton>
            </div>
        </div>
    )
}

export default ProjectCard