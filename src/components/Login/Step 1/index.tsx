import { InputText } from '../../Input'
import styles from './styles.module.scss'

export const FirstStepContent = () => {
    return (
        <div className={styles.firstStepContent}>
            <InputText placeholder="Email" type="text"/>
            <InputText placeholder="Password" type="password"/>
        </div>
    )
}
