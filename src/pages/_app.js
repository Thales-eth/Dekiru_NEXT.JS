import '@/styles/reset.css'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'
import { AuthProviderWrapper } from '@/contexts/auth.context'
import { ErrorWrapper } from '@/contexts/error.context'
import { StylesContextWrapper } from '@/contexts/styles.context'

export default function App({ Component, pageProps }) {

  const adresses = ["/posts/create", "/classes/create"]
  const regex = /^\/(reviews|posts|classes)\/(create|edit)\/.*/

  const adressesMap = new Set(adresses)

  const router = useRouter()
  const location = router.asPath

  const canShow = !adressesMap.has(location) && !regex.test(location)
  const isChat = location === "/conversations"

  return (
    <AuthProviderWrapper>
      <StylesContextWrapper>
        <ErrorWrapper>
          {
            canShow
            &&
            <NavBar isChat={isChat} />
          }
          <Component {...pageProps} />
          {
            canShow && !isChat
            &&
            <Footer />
          }
        </ErrorWrapper>
      </StylesContextWrapper>
    </AuthProviderWrapper>
  )
}
