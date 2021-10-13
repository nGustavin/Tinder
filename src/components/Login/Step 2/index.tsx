import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { InputText } from '../../Input'
import {LargeButton} from '../../LargeButton'
import styles from './styles.module.scss'

type ModalContainerProps = {
    buttonAction: () => void
    children?: ReactNode
}


export const SecondStepModal:React.FC<ModalContainerProps> = ({buttonAction, children}) => {
    const variants = {
        hidden: {opacity: 0, x: 400, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: -500, y: 0},
    }

    const variantsInner = {
        hidden: {opacity: 0, x: 300, y: 0},
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
       <motion.div
        variants={variantsInner}
        initial="hidden"
        animate="enter"
        exit="exit"
       >
                    <h1>Tell me a little <br/>
                        about you</h1>
                    </motion.div>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <LargeButton text="Next" onClick={buttonAction}/>
                    </footer>
        </motion.div>
        )
}
