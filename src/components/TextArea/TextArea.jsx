import styles from './TextArea.module.css'

const TextArea = ({ placeholder, handleChange, inputValue, name }) => {
    return (
        <textarea className={styles.textarea} value={inputValue} onChange={handleChange} name={name} id="subject" cols="100" rows="40" placeholder={placeholder}></textarea>
    )
}

export default TextArea