import { useState } from "react"
import { TopbarLandingHeader, TopbarLandingNav, TopbarLandingNavButtonContainer, TopbarLandingNavButtonLink, TopbarLandingNavIcon, TopbarLandingNavLink, TopbarLandingNavList, TopbarLandingNavLogoContainer, TopbarLandingNavLogoImg, TopbarLandingNavLogoTitle, TopbarLandingNavMenu, TopbarLandingNavToggleContainer, TopbarLandingNavToggleMenu } from "./TopbarLanding.elements"
import Logo from "../../../images/logo.png"
import { BiBulb, BiCalendarEvent, BiHome, BiImages, BiInfoCircle, BiMenu, BiMessageRoundedDots, BiQuestionMark, BiX } from "react-icons/bi"
import DarkMode from "../../dark_mode/DarkMode"

const TopbarLanding = () => {
    const [toggleState, setToggle] = useState(false)
    const [navbarState, setNavbar] = useState(false)

    const toggleClicked = () => {
        if (window.innerWidth < 1024) {
            setToggle(!toggleState)
        }
    }

    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <>
            <TopbarLandingHeader className={ navbarState ? "active" : "" }>
                <TopbarLandingNav>
                    <TopbarLandingNavLogoContainer>
                        <TopbarLandingNavLogoImg src={ Logo }/>
                        <TopbarLandingNavLogoTitle to="/">Himti</TopbarLandingNavLogoTitle>
                    </TopbarLandingNavLogoContainer>

                    <TopbarLandingNavMenu className={ toggleState ? "active" : "" }>
                        <TopbarLandingNavList>
                            <TopbarLandingNavLink to="home_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiHome/>
                                </TopbarLandingNavIcon>
                                Home
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="about_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiInfoCircle/>
                                </TopbarLandingNavIcon>
                                About Us
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="do_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiBulb/>
                                </TopbarLandingNavIcon>
                                What We Do?
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="event_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiCalendarEvent/>
                                </TopbarLandingNavIcon>
                                Event
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="gallery_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiImages/>
                                </TopbarLandingNavIcon>
                                Gallery
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="faq_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiQuestionMark/>
                                </TopbarLandingNavIcon>
                                FAQ
                            </TopbarLandingNavLink>
                            <TopbarLandingNavLink to="contact_section" spy={ true } onClick={ toggleClicked } smooth={ true } duration={ 500 }>
                                <TopbarLandingNavIcon>
                                    <BiMessageRoundedDots/>
                                </TopbarLandingNavIcon>
                                Contact Us
                            </TopbarLandingNavLink>
                        </TopbarLandingNavList>
                        
                        <TopbarLandingNavButtonContainer>
                            <TopbarLandingNavButtonLink to="/login">Login</TopbarLandingNavButtonLink>
                            <TopbarLandingNavButtonLink to="/register">Register</TopbarLandingNavButtonLink>
                        </TopbarLandingNavButtonContainer>
                    </TopbarLandingNavMenu>

                    <TopbarLandingNavToggleContainer>
                        <DarkMode/>

                        <TopbarLandingNavToggleMenu>
                            {
                                toggleState ?
                                    <BiX onClick={ toggleClicked }/>
                                :
                                    <BiMenu onClick={ toggleClicked }/>
                            }
                        </TopbarLandingNavToggleMenu>
                    </TopbarLandingNavToggleContainer>
                </TopbarLandingNav>
            </TopbarLandingHeader>
        </>
    )
}

export default TopbarLanding