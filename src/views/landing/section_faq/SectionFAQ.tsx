import { useEffect, useState } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { GetFAQ } from "../../../Dummy"
import { SectionFAQButton, SectionFAQContainer, SectionFAQContent, SectionFAQQuestionAnswer, SectionFAQQuestionContent, SectionFAQQuestionToggle, SectionFAQTitle } from "./SetionFAQ.elements"

interface Content {
    id: number
    question: string
    answer: string
}

const SectionFAQ = () => {
    const [contentState, setContent] = useState<Content[]>([])
    const [activeState, setActive] = useState(0)

    const toggleClicked = (id: number) => {
        if (id === activeState) {
            setActive(0)
        } else {
            setActive(id)
        }
    }

    const toggleActiveStyle = (id: number) => {
        if (id === activeState) {
            return "active"
        } else {
            return "inactive"
        }
    }

    useEffect(() => {
        const GetData = async () => {
            setContent(GetFAQ.FAQ)
        }
        GetData()
    }, [])

    const contentElement = contentState.map(({id, question, answer}: Content) => {
        return (
            <SectionFAQQuestionContent key={ id }>
                <SectionFAQQuestionToggle className={ toggleActiveStyle(id) } onClick={ () => toggleClicked(id) }>
                    { question }
                    {
                        toggleActiveStyle(id) === "active" ?
                            <BiMinus/>
                        :
                            <BiPlus/>
                    }  
                </SectionFAQQuestionToggle>    
                { toggleActiveStyle(id) === "active" && <SectionFAQQuestionAnswer>{ answer }</SectionFAQQuestionAnswer>}
            </SectionFAQQuestionContent>
        )
    })

    return (
        <>
            <SectionFAQContainer id="faq_section">
                <SectionFAQTitle>Frequently Asked Questions</SectionFAQTitle>

                <SectionFAQContent>
                    { contentElement }
                </SectionFAQContent>

                <SectionFAQButton to="">View All</SectionFAQButton>
            </SectionFAQContainer>
        </>
    )
}

export default SectionFAQ