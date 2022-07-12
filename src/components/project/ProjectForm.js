import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

import styles from './ProjectForm.module.css' 

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>

            <Input
                type="Text"
                text="Nome do projecto"
                name="Nome"
                placeholder="Insira o nome do projecto" />

            <Input
                type="number"
                text="Orçamento do projecto"
                name="budget"
                placeholder="Insira o orçamento do projecto" />

            <Select name="category_id" text="Selecione a categoria" />
            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm