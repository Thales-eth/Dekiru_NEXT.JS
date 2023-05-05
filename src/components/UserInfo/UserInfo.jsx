import styles from './UserInfo.module.css'
import SpainFlag from "../../components/assets/spain.png"
import JapanFlag from "../../components/assets/japan.png"
import getStars from '../../utils/getStars'
import Image from 'next/image'

const UserInfo = ({ user, ProfilePic }) => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.me}>
                <Image width={143} height={125} src={user.language === 'Spanish' ? SpainFlag : JapanFlag} className={styles.languageFlag} alt='spanishFlag' />
                {
                    ProfilePic &&
                    <Image width={400} height={600} src={ProfilePic} className={styles.profilePic} alt='profilePic' />
                }
            </div>
            <div className={styles.rating}><span>{getStars(user.score, 40)}</span></div>
        </div>
    )
}

export default UserInfo