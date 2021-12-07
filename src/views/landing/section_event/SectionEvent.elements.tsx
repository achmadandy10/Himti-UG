import styled from "styled-components";

export const SectionEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 3rem);
    padding: 2rem 0 2rem;
    
    @media screen and (min-width: 768px) {
        height: 100vh;
        padding: 3.6rem 5rem 3.6rem;
    }
`

export const SectionEventTitle = styled.h2`
    font-size: var(--h1-font-size);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
    position: relative;

    &::before {
        content: "";
        height: 1px;
        width: 100px;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid var(--title-color);
        transform: translate(-50%);
    }   
`

export const SectionEventContent = styled.div`
    width: 100%;
`

export const SectionEventSlideContainer = styled.div`
    position: relative;
    height: 100%;
    border-radius: 8px;
    box-shadow: var(--bs-smooth);
    overflow: hidden;

    &:hover {
        & img {
            transform: scale(1.2);
        }
    }
`

export const SectionEventSlideImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: .3s ease;
`

export const SectionEventSlideOverlay = styled.div`
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--rgba-color-0-5);
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
`

export const SectionEventSlideTitle = styled.h2`
    font-size: var(--h3-font-size);
    color: #FFFFFF;
`

export const SectionEventSlideDate = styled.span`
    font-size: var(--normal-font-size);
    color: #DDDDDD;
`