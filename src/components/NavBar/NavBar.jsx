import styles from './NavBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const NavBar = ({ isChat }) => {

    const router = useRouter()
    const currentUrl = router.asPath

    const { user, logout } = useContext(AuthContext)

    return (
        <header>
            <nav className={styles.navBar} style={isChat ? { "backgroundColor": "#F5F7FB" } : { "backgroundColor": "white" }}>
                <Link href={"/"}><h1 className={styles.logo}>Dekiru</h1></Link>

                <ul className={`${styles.flexContainer} ${styles.navList}`}>
                    <li><Link className={currentUrl === "/" ? styles.active : ""} href={"/"}>Home</Link></li>
                    <li><Link className={currentUrl === "/classes" ? styles.active : ""} href={"/classes"}>Classes</Link></li>
                    <li><Link className={currentUrl === "/users" ? styles.active : ""} href={"/users"}>Users</Link></li>
                    {
                        user && <li><Link className={currentUrl === "/users" ? styles.active : ""} href={"/conversations"}>Chat</Link></li>
                    }
                    <li><Link className={currentUrl === "/posts" ? styles.active : ""} href={"/posts"}>Posts</Link></li>
                </ul>

                <div className={styles.authButtons}>
                    {
                        user ?
                            <>
                                <Link className={`${styles.genericButton} ${styles.signupButton}`} href={"/profile"}>My Profile</Link>
                                <Link className={`${styles.loginButton} ${styles.genericButton}`} href={""} onClick={logout}>Logout</Link>
                            </>
                            :
                            <>
                                <Link className={`${styles.loginButton} ${styles.genericButton}`} href={"/login"}>Login</Link>
                                <Link className={`${styles.signupButton} ${styles.genericButton}`} href={"/signup"}>Sign up</Link>
                            </>
                    }
                </div>

            </nav>
        </header >
    )
}

export default NavBar