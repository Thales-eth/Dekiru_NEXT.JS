import React, { useState } from 'react'
import { createContext } from 'react'
import { useRouter } from 'next/router'

const StylesContext = createContext()

const StylesContextWrapper = (props) => {
    const [fadeOut, setFadeOut] = useState(false)
    const router = useRouter()

    function handleNavigation() {
        window.scrollTo(0, 0)
    }

    function triggerFadeOut(link) {
        if (link === -1) {
            router.back()
            return
        }

        if (typeof link === "string" && link.startsWith("https://checkout.stripe.com")) {
            window.open(link, "_blank");
            return
        }

        setFadeOut(true)
        setTimeout(() => {
            handleNavigation()
            router.push(link)
            setFadeOut(false)
        }, 200)
    }

    function triggerNavigation(link, e) {
        e.preventDefault()
        handleNavigation()
        router.push(link)
    }

    return (
        <StylesContext.Provider value={{ fadeOut, handleNavigation, triggerFadeOut, triggerNavigation }}>{props.children}</StylesContext.Provider>
    )
}

export { StylesContextWrapper, StylesContext }