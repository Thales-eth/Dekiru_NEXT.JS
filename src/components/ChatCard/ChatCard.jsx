import styles from './ChatCard.module.css'
import Image from 'next/image'
import getHumanHour from '../../utils/getHumanHour'

const ChatCard = ({ lastMessage, onClick, avatar, username }) => {
    return (
        <div onClick={onClick} className={styles.ChatCard}>
            <Image width={63} height={63} src={avatar} alt="profilePic" />
            {/* <div className={styles.greenDot}></div> */}

            <div className={styles.content}>
                <h3>{username}</h3>
                <p>{lastMessage?.message || ""}</p>
            </div>

            <span>{getHumanHour(lastMessage?.createdAt)}</span>
        </div>
    )
}

export default ChatCard