import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionDoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    position: relative;
    color: #FFFFFF;
`

export const SectionDoBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - (var(--header-height) + 2rem));
    background: linear-gradient(180.20deg, var(--first-color), var(--first-color-lighter));
    background-size: auto 100vh;
    z-index: -1;
`

export const SectionDoTitle = styled.h2`
    display: inline-block;
    font-size: var(--h1-font-size);
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
    color: #FFFFFF;
    position: relative;

    &::before {
        content: "";
        height: 1px;
        width: 100px;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid #FFFFFF;
        transform: translate(-50%);
    }
`

export const SectionDoLine = styled.span`
    border-left: 4px solid #FFFFFF;
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`

export const SectionDoTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid #FFFFFF;
`

export const SectionDoContent = styled.div`
    display: flex;
    margin: 3rem 10rem;
    justify-content: space-between;
    position: relative;
    align-items: center;

    @media only Screen and (max-width: 48rem) {
        display: block;

        &:last-child {
            margin-bottom: 2rem;
        }
    }
`

export const SectionDoData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    line-height: 1.5;

    @media only Screen and (max-width: 48em) {
        width: 100%;
        text-align: center;
        align-items: center;
    }
`

export const SectionDoDataLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--container-color);
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 8px;
`

export const SectionDoDataLabel = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--title-color);
    font-size: var(--smaller-font-size);
`

export const SectionDoDataLabelCircle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--first-color);
    margin-right: 0.5rem;
`

export const SectionDoDataTitle = styled.h2`
    font-size: var(--h1-font-size);
    line-height: 1.2;
    padding: 0.5rem 0;
    color: #FFFFFF;
`

export const SectionDoDataDescription = styled.p`
    color: #dddddd;
`

export const SectionDoDataButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 7px 50px;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: var(--first-color);

    & svg {
        transition: .3s ease;
        font-size: var(--h2-font-size);
    }
    
    &:hover {
        box-shadow: var(--bs-smooth);

        & svg {
            transform: translateX(5px);
        }
    }
`

export const SectionDoDataImgRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative; 

    @media only Screen and (max-width: 48rem) {
        display: none;
    }
`

export const SectionDoDataImg = styled.img`
    width: 400px;
    height: 250px;
    border-radius: 8px;
    box-shadow: var(--bs-smooth);
`