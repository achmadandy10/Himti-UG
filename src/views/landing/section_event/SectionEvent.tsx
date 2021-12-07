import { SectionEventContainer, SectionEventContent, SectionEventSlideContainer, SectionEventSlideDate, SectionEventSlideImg, SectionEventSlideOverlay, SectionEventSlideTitle, SectionEventTitle } from "./SectionEvent.elements"
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { GetEvent } from "../../../Dummy";

SwiperCore.use([Navigation, Pagination, Autoplay]); 

interface Content {
    id: number
    image: string
    title: string | null
    date: string | null
}

const SectionEvent = () => {
    const [contentState, setContent] = useState<Content[]>([])

    useEffect(() => {
        const GetData = async () => {
            setContent(GetEvent.event)
        }

        GetData()
    }, [])

    const contentElement = contentState.map(({id, image, title, date}: Content) => {
        return (
            <SwiperSlide key={ id }>
                <SectionEventSlideContainer>
                    <Link to="">
                        <SectionEventSlideImg src={ image }/>

                        <SectionEventSlideOverlay>
                            <SectionEventSlideTitle>{ title }</SectionEventSlideTitle>
                            <SectionEventSlideDate>{ date }</SectionEventSlideDate>
                        </SectionEventSlideOverlay>
                    </Link>
                </SectionEventSlideContainer>
            </SwiperSlide>
        )
    })

    return (
        <>
            <SectionEventContainer id="event_section">
                <SectionEventTitle>Upcoming Event</SectionEventTitle>
                
                <SectionEventContent>
                    <Swiper
                        style={{
                            padding: "40px"
                        }}
                        breakpoints={{
                            568: {
                                slidesPerView: 3
                            }
                        }}
                        autoplay={{
                            delay: 2500
                        }}  
                        spaceBetween={50}             
                        navigation
                        pagination={{ clickable: true }}
                    >
                        { contentElement }
                    </Swiper>
                </SectionEventContent>
            </SectionEventContainer>
        </>
    )
}

export default SectionEvent