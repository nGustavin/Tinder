import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import {LargeButton} from '../../LargeButton'
import { ReactNode } from 'react'

type ModalContainerProps = {
    title: string;
    buttonText: string;
    buttonAction: () => void
    description?: string;
    children?: ReactNode
}

export const ModalContainer: React.FC<ModalContainerProps> = ({title, buttonText, buttonAction, description, children}) => {
    const variants = {
        hidden: {opacity: 0, x: 400, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: -500, y: 0},
    }

    return (
        <motion.div 
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            className={styles.ModalContainer}
        >
       <div>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
       </div>
                    <main>
                    {children}
                    </main>
                    <footer>
                        <LargeButton text={buttonText} onClick={buttonAction}/>
                    </footer>
        </motion.div>
    )
}
