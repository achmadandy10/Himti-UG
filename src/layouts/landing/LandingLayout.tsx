import Footer from "../../components/footer/Footer"
import ScrollToTop from "../../components/scroll_to_top/ScrollToTop"
import TopbarLanding from "../../components/topbar/landing/TopbarLanding"
import SectionAbout from "../../views/landing/section_about/SectionAbout"
import SectionContact from "../../views/landing/section_contact/SectionContact"
import SectionDo from "../../views/landing/section_do/SectionDo"
import SectionEvent from "../../views/landing/section_event/SectionEvent"
import SectionFAQ from "../../views/landing/section_faq/SectionFAQ"
import SectionGallery from "../../views/landing/section_gallery/SectionGallery"
import SectionHome from "../../views/landing/section_home/SectionHome"
import { LandingLayoutContainer } from "./LandingLayout.elements"

const LandingLayout = () => {
    return (
        <>
            <LandingLayoutContainer>
                <TopbarLanding/>
                
                <SectionHome/>
                <SectionAbout/>
                <SectionDo/>
                <SectionEvent/>
                <SectionGallery/>
                <SectionFAQ/>
                <SectionContact/>

                <Footer/>
            </LandingLayoutContainer>
            <ScrollToTop/>
        </>
    )
}

export default LandingLayout