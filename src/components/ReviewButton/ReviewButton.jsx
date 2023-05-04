import styles from './ReviewButton.module.css'
import Link from 'next/link'

const ReviewButton = ({ handleClick }) => {
    return (
        <Link href={""} onClick={handleClick} className={styles.reviewButton}>Review</Link>
    )
}

export default ReviewButton