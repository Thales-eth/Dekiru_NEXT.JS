import IsPrivate from '@/components/IsPrivate/IsPrivate'
import PaymentMsg from '@/components/PaymentMsg/PaymentMsg'

const SucessPaymentPage = () => {
    return (
        <PaymentMsg msg={"Successful Payment!"} link={"/profile"} />
    )
}

const AuthSucessPaymentPage = () => {
    return (
        <IsPrivate Component={SucessPaymentPage} />
    )
}

export default AuthSucessPaymentPage