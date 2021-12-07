import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionAboutContainer = styled.div`
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

export const SectionAboutTitle = styled.h2`
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

export const SectionAboutContent = styled.div`
    display: grid;
    gap: var(--m-1-5);
    margin-left: var(--m-1-5);
    margin-right: var(--m-1-5);

    @media screen and (max-width: 350px) {
        margin-left: var(--m-1);
        margin-right: var(--m-1);
    }

    @media screen and (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media screen and (min-width: 768px) {
        column-gap: 5rem;
    }
`

export const SectionAboutImg = styled.img`
    box-shadow: var(--bs-smooth);
    width: 250px;
    border-radius: .5rem;
    justify-self: center;
    align-self: center;

    @media screen and (min-width: 768px) {
        width: 450px;
    }
`

export const SectionAboutData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        align-items: flex-start;
    }
`

export const SectionAboutDescription = styled.p`
    text-align: center;
    margin-bottom: var(--mb-2-5);
    
    @media screen and (min-width: 768px) {
        text-align: left;
    }
`

export const SectionAboutButtonContainer = styled.div`
    margin-top: 20px;
`

export const SectionAboutButtonLink = styled(Link)`
    padding: 7px 14px;
    width: 150px;
    color: var(--container-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--first-color);
    
    & svg {
        transition: .3s ease;
        font-size: var(--h2-font-size);
    }
    
    &:hover {
        color: #FFFFFF;
        box-shadow: var(--bs-smooth);

        & svg {
            /* color: #FFFFFF; */
            transform: translateX(5px);
        }
    }
`