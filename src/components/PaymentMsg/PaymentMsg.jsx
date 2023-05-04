import styles from './PaymentMsg.module.css'
import Link from 'next/link'
import { useRouter } from 'react-router-dom'

const PaymentMsg = ({ msg, subMsg, link }) => {
    const router = useRouter()

    return (
        <div className={styles.paymentMsg}>
            <h1>{msg}</h1>
            <p>{subMsg}</p>
            <Link href={""} onClick={(e) => {
                e.preventDefault()
                router.push(link)
            }
            }>Check classes</Link>
        </div >
    )
}

export default PaymentMsg