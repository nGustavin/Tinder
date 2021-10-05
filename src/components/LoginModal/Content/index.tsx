import styles from './styles.module.scss'
import {LargeButton} from '../../LargeButton/index'

export const ContentModal: React.FC = () => {
    return(
        <div className={styles.contentModalContainer}>
            <main>
                <h1>Find Your Next <br/>
                Love with us</h1>
                <p>let’s find your life partner or make <br/>
                new friends!</p>
                <footer>
                    <LargeButton text="Get Started"/>
                </footer>
            </main>
        </div>
    )
}