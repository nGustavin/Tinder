import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface inputTextProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    textarea?: boolean;
}

export const InputText:React.FC<inputTextProps> = ({placeholder, textarea = false, ...rest}) => {
    if(!textarea){
        return (
            <input placeholder={placeholder} {...rest} className={styles.inputText}/>
        )
    }else{
        return (
            <textarea placeholder={placeholder} className={styles.inputTextarea}/>
        )
    }
}
