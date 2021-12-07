import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionHomeContent = styled.div`
    height: calc(100vh - 3rem);
    
    @media screen and (min-width: 768px) {
        height: 100vh;
    }
`

export const SectionHomeContentImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
`

export const SectionHomeContentOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--rgba-color-0-5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 50px 20px;
    gap: 10px;
    
    @media screen and (min-width: 768px) {
        padding: 50px;
    }

    @media screen and (min-width: 1024px) {
        padding: 100px 150px;
    }
`

export const SectionHomeContentTitle = styled.h1`
    color: #FFFFFF;
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
`

export const SectionHomeContentDescription = styled.p`
    color: #DDDDDD;
`

export const SectionHomeContentButton = styled(Link)`
    padding: 7px 14px;
    width: 150px;
    background-color: #FFFFFF;
    color: var(--first-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease;
    text-transform: uppercase;
    cursor: pointer;
    
    & svg {
        transition: .3s ease;
        font-size: var(--h2-font-size);
    }

    &:hover {
        background-color: var(--first-color);
        color: #FFFFFF;
        box-shadow: var(--bs-smooth);

        & svg {
            color: #FFFFFF;
            transform: translateX(5px);
        }
    }
`