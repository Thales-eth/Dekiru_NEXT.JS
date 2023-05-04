import styles from '@/styles/pages/deleteprofile.module.css'
import userService from '@/services/user.service'
import { DELETE_PROFILE_MSG } from '@/consts'
import { AuthContext } from '@/contexts/auth.context'
import { useRouter } from 'next/router'
import { StylesContext } from '@/contexts/styles.context'
import { useContext, useState } from 'react'
import IsPrivate from '@/components/IsPrivate/IsPrivate'

const ProfileDeletePage = () => {

    const { user, logout } = useContext(AuthContext)
    const { handleNavigation } = useContext(StylesContext)
    const [fadeOut, setFadeOut] = useState(false)
    const router = useRouter()

    async function handleClick(canDelete) {

        if (canDelete) {
            await userService.deleteUser(user._id)
            setFadeOut(true)
            setTimeout(() => {
                logout()
            }, 300)
        }

        else {
            setFadeOut(true)
            setTimeout(() => {
                handleNavigation()
                router.push("/profile")
            }, 300)
        }
    }

    return (
        <div className={`${styles.ProfileDeletePage} ${fadeOut && styles.fadeOut}`}>
            <h1>Delete Profile</h1>
            <p>{DELETE_PROFILE_MSG}</p>
            <div className={styles.buttons}>
                <button onClick={() => handleClick(true)}>Yes</button>
                <button onClick={() => handleClick(false)}>No</button>
            </div>
        </div>
    )
}

const AuthProfileDeletePage = () => {
    return (
        <IsPrivate Component={ProfileDeletePage} />
    )
}

export default AuthProfileDeletePage