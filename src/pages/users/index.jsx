import styles from '@/styles/pages/users.module.css'
import userService from '@/services/user.service'
import Map from '@/components/Map/Map'
import { MAP_MSG } from '@/consts'
import { AuthContext } from '@/contexts/auth.context'
import { useContext, useEffect, useState } from 'react'
import IsPrivate from '@/components/IsPrivate/IsPrivate'

const UsersMap = () => {
    const [nearUsers, setNearUsers] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadNearestUsers()
    }, [])

    async function loadNearestUsers() {
        try {
            const nearestUsers = await userService.getNearUsers(user._id, user.location.coordinates).then(({ data }) => data)
            setNearUsers(nearestUsers)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.mapPage}>
            <h1>{MAP_MSG}</h1>
            <Map users={nearUsers} />
        </div>
    )
}

const AuthMap = () => {
    return (
        <IsPrivate Component={UsersMap} />
    )
}

export default AuthMap