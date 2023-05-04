import styles from '@/styles/pages/editprofile.module.css'
import SignUpForm from '@/components/SignUpForm/SignUpForm'
import userService from '@/services/user.service'
import uploadService from '@/services/upload.service'
import Loader from '@/components/Loader/Loader'
import { useEffect, useState } from 'react'
import { AuthContext } from '@/contexts/auth.context'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { StylesContext } from '@/contexts/styles.context'
import IsPrivate from '@/components/IsPrivate/IsPrivate'

const ProfileEditPage = () => {

    const [editedUser, setEditedUser] = useState({ email: "", username: "", password: "", language: "", role: "Student", avatar: "", age: "", interests: [] })
    const { user, storeToken, authenticateUser } = useContext(AuthContext)
    const { handleNavigation } = useContext(StylesContext)
    const [showLoading, setShowLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setEditedUser(user)
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleNavigation()
        setShowLoading(true)
        let cloudinaryLink = editedUser.avatar
        if (typeof editedUser.avatar !== "string") {
            cloudinaryLink = await uploadService.uploadPhoto(editedUser.avatar).then(({ data }) => data)
        }
        const token = await userService.editOneUser(user._id, { ...editedUser, avatar: cloudinaryLink }).then(({ data }) => data.newToken)

        await storeToken(token)
        await authenticateUser()

        router.push("/profile")
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditedUser({ ...editedUser, [name]: value })
    }

    return (
        <div className={styles.editPage}>
            {
                !showLoading
                    ?
                    <>
                        <h1>Edit Profile</h1>
                        <SignUpForm showPassword={false} handleSubmit={handleSubmit} setUserData={setEditedUser} userData={editedUser} handleInputChange={handleInputChange} />
                    </>
                    :
                    <Loader />
            }
        </div>
    )
}

const AuthProfileEditPage = () => {
    return (
        <IsPrivate Component={ProfileEditPage} />
    )
}

export default AuthProfileEditPage