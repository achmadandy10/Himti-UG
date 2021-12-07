import { useEffect, useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import { ContentAbout } from "../../../Dummy"
import { SectionAboutButtonContainer, SectionAboutButtonLink, SectionAboutContainer, SectionAboutContent, SectionAboutData, SectionAboutDescription, SectionAboutImg, SectionAboutTitle } from "./SectionAbout.elements"

const SectionAbout = () => {
    const [aboutState, setAbout] = useState({
        image: '',
        description: ''
    })

    useEffect(() => {
        const GetData = async () => {
            setAbout({
                image: ContentAbout.about.image,
                description: ContentAbout.about.description,
            })
        }
        GetData()
    }, [])

    var newDescription = ''

    if (window.innerWidth <= 500) {
        if (aboutState.description.length <= 300) {
            newDescription = aboutState.description
        } else {
            newDescription = `${aboutState.description.substring(0, 300)}...`
        }
    } else if (window.innerWidth <= 768) {
        if (aboutState.description.length <= 400) {
            newDescription = aboutState.description
        } else {
            newDescription = `${aboutState.description.substring(0, 400)}...`
        }
    } else if (window.innerWidth <= 1024) {
        if (aboutState.description.length <= 500) {
            newDescription = aboutState.description
        } else {
            newDescription = `${aboutState.description.substring(0, 500)}...`
        }
    } else {
        if (aboutState.description.length <= 600) {
            newDescription = aboutState.description
        } else {
            newDescription = `${aboutState.description.substring(0, 600)}...`
        }
    }

    return (
        <>
            <SectionAboutContainer id="about_section">
                <SectionAboutTitle>About Us</SectionAboutTitle>

                <SectionAboutContent>
                    <SectionAboutImg src={ aboutState.image }/>

                    <SectionAboutData>
                        <SectionAboutDescription>{ newDescription }</SectionAboutDescription>

                        <SectionAboutButtonContainer>
                            <SectionAboutButtonLink to={ "/" }>Read More <BiChevronRight/></SectionAboutButtonLink>
                        </SectionAboutButtonContainer>
                    </SectionAboutData>
                </SectionAboutContent>
            </SectionAboutContainer>
        </>
    )
}

export default SectionAbout