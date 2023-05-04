import styles from './Footer.module.css'
import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { StylesContext } from '../../contexts/styles.context'
import { useContext } from 'react'

const Footer = () => {
    const { handleNavigation } = useContext(StylesContext)

    return (
        <div className={styles.footer}>
            <Link onClick={handleNavigation} className={styles.footerLink} href={"/about"}>About us</Link>

            <div className="logos">
                <Link target='_blank' href={"https://i1.sndcdn.com/artworks-000305743743-qkwj6z-t500x500.jpg"}>
                    <SlSocialInstagram className={styles.logo} color={"white"} size={48} />
                </Link>
                <Link target='_blank' href={"https://i1.sndcdn.com/artworks-000305743743-qkwj6z-t500x500.jpg"}>
                    <SlSocialTwitter className={styles.logo} color={"white"} size={48} />
                </Link>
                <Link target='_blank' href={"https://i1.sndcdn.com/artworks-000305743743-qkwj6z-t500x500.jpg"}>
                    <SlSocialYoutube className={styles.logo} color={"white"} size={48} />
                </Link>
            </div>

            <Link className={styles.footerLink} href={"/contact"}>Contact</Link>
        </div>
    )
}

export default Footer