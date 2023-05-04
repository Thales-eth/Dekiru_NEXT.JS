import styles from './StickyButton.module.css'
import Link from 'next/link'

const StickyButton = ({ text, handleClick }) => {
    return (
        <Link href={""} onClick={handleClick}>
            <div className={styles.createPost}>
                {text}
            </div>
        </Link>
    )
}

export default StickyButton