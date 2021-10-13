import { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface TagProps extends HTMLAttributes<HTMLDivElement>{
    text: string;
    active?: boolean;
}

export const Tag:React.FC<TagProps> = ({text, active = false, ...rest}) => {
    return (
        <div className={`${styles.TagContainer} ${active ? styles.active : null}`} {...rest}>
            <h1>{text}</h1>
        </div>
    )
}
