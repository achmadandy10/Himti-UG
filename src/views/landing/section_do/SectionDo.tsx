import { useEffect, useRef, useState } from "react"
import { GetDivision } from "../../../Dummy"
import { SectionDoBackground, SectionDoContainer, SectionDoContent, SectionDoData, SectionDoDataButton, SectionDoDataDescription, SectionDoDataImg, SectionDoDataImgRight, SectionDoDataLabel, SectionDoDataLabelCircle, SectionDoDataLabelContainer, SectionDoDataTitle, SectionDoLine, SectionDoTitle, SectionDoTriangle } from "./SectionDo.elements"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BiChevronRight } from "react-icons/bi"

interface Content {
    id: number,
    label: string
    title: string
    description: string
    image: string
}

interface Ref {
    el: HTMLDivElement
}

const SectionDo = () => {
    const [contentState, setContent] = useState<Content[]>([])
    const ref = useRef(null)
    const revealRefs = useRef<Ref[]>([])
    revealRefs.current = []
    gsap.registerPlugin(ScrollTrigger)
    
    const addToRefs = (el: HTMLDivElement | null) => {
        if ( el && !revealRefs.current.includes({el}) ) {
            revealRefs.current.push({el})
        }
    }
    
    useEffect(() => {
        const GetData = async () => {
            setContent(GetDivision.division)
        }
        GetData()
    }, [])

    useEffect(() => {
        const element = ref.current
        const line = document.getElementById("line")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.getElementById("do_section"),
                start: "top top+=85",
                end: "bottom bottom",
                pin: element,
                pinReparent: true,
            }
        })

        tl.fromTo(
            document.getElementById("line"),
            {
                height: "15rem",
            },
            {
                height: "3rem",
                duration: 2,
                scrollTrigger: {
                    trigger: line,
                    start: "top top+=200",
                    end: "bottom top+=200",
                    scrub: true,
                }
            },
        )

        revealRefs.current.forEach(({el}: Ref, index: number) => {
            tl.from(
                el.childNodes[0],
                {
                    x: -300,
                    opacity:0,
                    duration: 2,
                    ease: "power2",
                    scrollTrigger: {
                        trigger: el,
                        id: `section-${index+1}`,
                        start: "top center+=100",
                        end: "bottom bottom-=100",
                        scrub: true,
                        snap: 0.5,
                    }
                }
            )
            .to(
                el.childNodes[1],
                {
                    transform: "scale(0)",
                    duration: 2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: el.childNodes[1] as gsap.DOMTarget,
                        id: `section-${index+1}`,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        snap: 0.5,
                    }
                }
            )
            .from(
                el.childNodes[2],
                {
                    y: 400,
                    duration: 2,
                    ease: "power2",
                    scrollTrigger: {
                        trigger: el,
                        id: `section-${index+1}`,
                        start: "top center+=100",
                        end: "bottom center-=200",
                        scrub: true,
                        snap: 0.5,
                    }
                }
            )
            .to(
                el,
                {
                    opacity: 0,
                    ease: "power2",
                    scrollTrigger: {
                        trigger: el,
                        id: `section-${index+1}`,
                        start: "top center-=100",
                        end: "center top+=100",
                        scrub: true,
                        snap: 0.5,
                    }
                }
            )
        })   
    })
    const contentElement = contentState.map(({ id, label, title, description, image }: Content) => {
        return (
            <SectionDoContent key={ id } ref={ addToRefs }>
                <SectionDoData>
                    <SectionDoDataLabelContainer>
                        <SectionDoDataLabelCircle/>
                        <SectionDoDataLabel>{ label }</SectionDoDataLabel>
                    </SectionDoDataLabelContainer>

                    <SectionDoDataTitle>{ title }</SectionDoDataTitle>
                    <SectionDoDataDescription>{ `${description.substring(0, 150)}...` }</SectionDoDataDescription>
                    <SectionDoDataButton to="/">
                        Detail <BiChevronRight/>
                    </SectionDoDataButton>
                </SectionDoData>
                <SectionDoDataImgRight>
                    <SectionDoDataImg src={ image }/>
                </SectionDoDataImgRight>
            </SectionDoContent>
        )
    })

    return (
        <>
            <SectionDoContainer id="do_section">
                <SectionDoBackground ref={ ref }>
                    <SectionDoTitle>What We Do?</SectionDoTitle>
                    <SectionDoLine id="line"/>
                    <SectionDoTriangle/>
                </SectionDoBackground>

                { contentElement }
            </SectionDoContainer>
        </>
    )
}

export default SectionDo