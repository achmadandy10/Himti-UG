import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import { SectionHomeContent, SectionHomeContentButton, SectionHomeContentDescription, SectionHomeContentImg, SectionHomeContentOverlay, SectionHomeContentTitle } from './SectionHome.elements';
import { ContentHome } from '../../../Dummy';
import { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay]);

interface Content {
    id: number
    title: string | null
    image: string
    description: string | null
    slug: string | null
}

const SectionHome = () => {
    const [contentState, setContent] = useState<Content[]>([])
    
    useEffect(() => {
        const GetContent = async () => {
            setContent(ContentHome)
        }
        GetContent()
    }, [])

    const contentElement = contentState.map(({id, title, image, description, slug}: Content) => {
        var newDescription = ''

        if (description !== null) {
            if (window.innerWidth <= 500) {
                if (description.length <= 100) {
                    newDescription = description
                } else {
                    newDescription = `${description.substring(0, 100)}...`
                }
            } else if (window.innerWidth <= 768) {
                if (description.length <= 200) {
                    newDescription = description
                } else {
                    newDescription = `${description.substring(0, 200)}...`
                }
            } else if (window.innerWidth <= 1024) {
                if (description.length <= 300) {
                    newDescription = description
                } else {
                    newDescription = `${description.substring(0, 300)}...`
                }
            } else {
                if (description.length <= 500) {
                    newDescription = description
                } else {
                    newDescription = `${description.substring(0, 500)}...`
                }
            }
        }

        return (
            <SwiperSlide key={ id }>
                <SectionHomeContent>
                    <SectionHomeContentImg src={ image }/>

                    <SectionHomeContentOverlay>
                        {
                            title !== null ?
                                <SectionHomeContentTitle>{ title }</SectionHomeContentTitle>
                            :
                                ""
                        }

                        {
                            description !== null ?
                                <SectionHomeContentDescription>{ newDescription }</SectionHomeContentDescription>
                            :
                                ""
                        }

                        {
                            slug !== null ?
                                <SectionHomeContentButton to={ slug }>Read More <BiChevronRight/></SectionHomeContentButton>
                            :
                                ""
                        }
                    </SectionHomeContentOverlay>
                </SectionHomeContent>
            </SwiperSlide>
        )
    })

    return (
        <>
            <Swiper
                id="home_section"
                autoplay={{
                    "delay": 2500
                }}  
                keyboard={{
                    enabled: true
                }}
                navigation
                pagination={{ clickable: true }}
            >
                { contentElement }
            </Swiper>
        </>
    )
}

export default SectionHome