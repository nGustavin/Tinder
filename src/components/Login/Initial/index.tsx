import styles from './styles.module.scss'
import {LargeButton} from '../../LargeButton/index'
import { motion, AnimatePresence } from 'framer-motion'

type InitialModalProps = {
    visible?: boolean
    buttonAction?: (any) => any;
}

export const InitialModal: React.FC<InitialModalProps> = ({visible = true, buttonAction}) => {
    const variants = {
        hidden: {opacity: 0, x: 400, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: -500, y: 0},
    }

    const variants2 = {
        hidden: {opacity: 1, x: 0, y: 200, speed: 50},
        enter: {opacity: 1, x: 0, y: 0, speed: 50},
        exit: {opacity: 1, x: 0, y: 200, speed: 50},
    }

    return(
        <AnimatePresence>
            {visible ? (
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    className={styles.noContentModalContainer}
                >
                <motion.main
                    variants={variants2}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                >
                    <h1>Find Your Next <br/>
                    Love with us</h1>
                    <p>let’s find your life partner or make <br/>
                    new friends!</p>
                    <footer>
                        <LargeButton text="Get Started" onClick={buttonAction}/>
                    </footer>
                </motion.main>
            </motion.div>
            ) : null}
        </AnimatePresence>
    )
}