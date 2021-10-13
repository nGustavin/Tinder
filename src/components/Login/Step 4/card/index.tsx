import styles from './styles.module.scss'
import {HiPlus} from 'react-icons/hi'

export const ForthStepContent = () => {
    return (
        <div className={styles.contentContainer}>
            <aside>
                <div>
                    <HiPlus size={50} color="rgba(255, 255, 255, 0.5)"/>
                </div>
            </aside>
            <main>
                <h1>Lorena Caruso</h1>
                <p>Biomed Student, dog lover, passionate about books.</p>
            </main>
        </div>
    )
}
