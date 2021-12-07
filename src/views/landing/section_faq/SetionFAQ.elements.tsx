import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionFAQContainer = styled.div`
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

export const SectionFAQTitle = styled.h2`
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

export const SectionFAQContent = styled.div`
    padding: 0 20px;
    
    @media only Screen and(min-width: 768px) {
        padding: 0 80px;
    }
`

export const SectionFAQQuestionContent = styled.div`
    box-shadow: var(--bs-smooth);
    border-radius: 8px;
    margin: 1rem 0;
`

export const SectionFAQQuestionToggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--container-color);
    cursor: pointer;
    padding: 20px;
    border-radius: 8px;
    transition: .3s ease;
    font-size: var(--normal-font-size);
    font-weight: 600;
    width: 100%;
    color: var(--title-color);

    &.active {
        color: #FFFFFF;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background: var(--first-color);
    }
`

export const SectionFAQQuestionAnswer = styled.p`
    color: var(--text-title);
    padding: 10px 20px;
`

export const SectionFAQButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    border: 1px solid var(--title-color);
    background: transparent;
    padding: 7px 14px;
    width: 200px;
    border-radius: 8px;
    color: var(--title-color);
    transition: .3s ease;
    text-transform: uppercase;

    &:hover {
        color: #FFFFFF;
        border-color: transparent;
        box-shadow: var(--bs-smooth);
        background: var(--first-color);
    }
`