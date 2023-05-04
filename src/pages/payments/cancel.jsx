import IsPrivate from '@/components/IsPrivate/IsPrivate'
import PaymentMsg from '@/components/PaymentMsg/PaymentMsg'

const CancelPaymentPage = () => {
    return (
        <PaymentMsg msg={"Payment cancelled!"} subMsg={"Check other classes:"} link={"/classes"} />
    )
}

const AuthCancelPaymentPage = () => {
    return (
        <IsPrivate Component={CancelPaymentPage} />
    )
}

export default AuthCancelPaymentPage