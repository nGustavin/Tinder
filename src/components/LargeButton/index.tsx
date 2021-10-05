import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface LargeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}

export const LargeButton: React.FC<LargeButtonProps> = ({text, ...rest}) => {
    return(
        <button {...rest} className={styles.defaultLargeButton}>{text}</button>
    )
}