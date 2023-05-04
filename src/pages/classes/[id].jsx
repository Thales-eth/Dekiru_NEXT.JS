import styles from '@/styles/pages/class.module.css'
import classService from '@/services/class.service'
import Welcome from '@/components/Welcome/Welcome'
import UserInfo from '@/components/UserInfo/UserInfo'
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection'
import stripeService from '@/services/stripe.service'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { StylesContext } from '@/contexts/styles.context'
import IsPrivate from '@/components/IsPrivate/IsPrivate'

const ClassesPage = () => {

    const [singleClass, setSingleClass] = useState({ teacher: { avatar: "", username: "", score: 0 }, title: "", description: "", productId: "" })
    const [userData, setUserData] = useState({ username: "", avatar: "", interests: [], score: 0, reviews: [], penfriends: [] })
    const [stripePaymentInfo, setStripePaymentInfo] = useState({ url: "" })
    const { url } = stripePaymentInfo
    const { fadeOut, triggerFadeOut } = useContext(StylesContext)

    const { teacher, title } = singleClass
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        loadClass()
    }, [])

    useEffect(() => {
        loadPayment()
    }, [singleClass])

    function handleClick() {
        triggerFadeOut(`/reviews/create/${userData._id}`)
    }

    async function loadClass() {
        const singleClass = await classService.getOneClass(id).then(({ data }) => data)
        setSingleClass(singleClass)
        setUserData(singleClass.teacher)
    }

    async function loadPayment() {
        if (singleClass.productId) {
            const paymentInfo = await stripeService.createPaymentSession(singleClass.productId).then(({ data }) => data)
            setStripePaymentInfo(paymentInfo)
        }
    }

    return (
        <div className={`${styles.classPlage} ${fadeOut && styles.fadeOut}`}>
            <div className="banner">
                <Welcome link={url} message={`${title} with`} user={teacher} buttonText={"Book Class"} />
                <UserInfo user={teacher} ProfilePic={teacher.avatar} />
            </div>

            <ReviewsSection showReview={true} setUserData={setUserData} userData={userData} handleClick={handleClick} />

        </div>
    )
}

const AuthClassesPage = () => {
    return (
        <IsPrivate Component={ClassesPage} />
    )
}

export default AuthClassesPage