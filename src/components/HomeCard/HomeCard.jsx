import styles from './HomeCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { useContext } from 'react'
import { StylesContext } from '../../contexts/styles.context'

const HomeCard = ({ headerText, paragraph, src, link }) => {
    const { handleNavigation } = useContext(StylesContext)

    return (
        <Link href={link} onClick={handleNavigation}><div className={`${styles.card} ${styles.blackCard}`}>
            <div className={styles.info}>
                <h2>{headerText}</h2>
                <p>{paragraph}</p>
                <div className={styles.logo}>
                    <BsArrowRight className={styles.arrowLogo} color={"black"} size={24} />
                </div>
            </div>

            <Image src={src} alt="flag" className={styles.flag} />
        </div>
        </Link>
    )
}

export default HomeCard
