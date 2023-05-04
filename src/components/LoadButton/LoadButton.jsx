import styles from './LoadButton.module.css'
import Link from 'next/link'

const LoadButton = ({ handleClick, showLoader }) => {
    return (
        <Link href={""} onClick={handleClick} style={!showLoader ? { backgroundColor: "black" } : { backgroundColor: "#BC002D" }} className={styles.loadButton}>{showLoader ? "Load More" : "FIrst Reviews"}</Link>
    )
}

export default LoadButton