import { useState } from "react"
import { BiChevronsUp } from "react-icons/bi"
import { ScrollToTopContainer } from "./ScrollToTop.elements"
import { animateScroll as scroll } from "react-scroll"

const ScrollToTop = () => {
    const [scrollState, setScroll] = useState(false)

    const changeScroll = () => {
        if (window.scrollY >= 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const scrollClicked = () => {
        scroll.scrollToTop()
    }

    window.addEventListener('scroll', changeScroll)
    return (
        <>
            <ScrollToTopContainer className={ scrollState ? "active" : "" } onClick={ scrollClicked }>
                <BiChevronsUp/>
            </ScrollToTopContainer>
        </>
    )
}

export default ScrollToTop