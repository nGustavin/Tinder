import styles from './styles.module.scss'

type inputTextProps = {
    placeholder: string;
    type: "text" | "password"
}

export const InputText:React.FC<inputTextProps> = ({placeholder, type}) => {
    return (
        <input placeholder={placeholder} type={type} className={styles.inputText}/>
    )
}
