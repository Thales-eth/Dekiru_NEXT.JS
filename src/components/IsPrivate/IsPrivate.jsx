import React from 'react'
import Loader from '../Loader/Loader'
import { useRouter } from 'next/router'
import { AuthContext } from '@/contexts/auth.context'
import { useContext } from 'react'

const IsPrivate = ({ Component }) => {

    const { user, isLoading } = useContext(AuthContext)
    const router = useRouter()

    if (isLoading) return <Loader />

    if (!user) {
        router.push("/login")
        return
    }

    return (
        <Component />
    )
}

export default IsPrivate