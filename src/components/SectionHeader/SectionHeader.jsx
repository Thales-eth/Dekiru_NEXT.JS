import styles from './SectionHeader.module.css'

const SectionHeader = ({ text, css }) => {
    return (
        <h3 className={styles.sectionHeader} style={css}>{text}:</h3>
    )
}

export default SectionHeader