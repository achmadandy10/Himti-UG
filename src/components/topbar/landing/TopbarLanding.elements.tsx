import styled from "styled-components";
import { Link } from "react-router-dom"
import { Link as Scroll } from "react-scroll"

export const TopbarLandingHeader = styled.header`
    width: 100%;
    position: fixed;
    bottom: -1px;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--first-color);

    &.active {
        box-shadow: var(--bs-smooth);
    }

    @media screen and (min-width: 768px) {
        top: 0;
        bottom: initial;
        padding: 0 1rem;
    }

    @media screen and (min-width: 1024px) {
        top: 0;
    }
`

export const TopbarLandingNav = styled.nav`
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: var(--m-1-5);
    margin-right: var(--m-1-5);
    
    @media screen and (max-width: 350px) {
        margin-left: var(--m-1);
        margin-right: var(--m-1);
    }
    
    @media screen and (min-width: 768px) {
        height: calc(var(--header-height) + 1.5rem);
        gap: 1rem;
        max-width: 100%;
        margin-left: 100px;
        margin-right: 100px;
    }
    
    @media screen and (min-width: 1024px) {
        height: calc(var(--header-height) + 2rem);
    }
`

export const TopbarLandingNavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 35px;
    height: 35px;
    cursor: pointer;
    
    @media screen and (min-width: 1024px) {
        width: 50px;
        height: 50px;
        justify-content: center;
        gap: 5px;
    }
`

export const TopbarLandingNavLogoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TopbarLandingNavLogoTitle = styled(Link)`
    color: var(--container-color);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    transition: .3s ease;

    &:hover {
        color: var(--first-color);
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }
`

export const TopbarLandingNavMenu = styled.div`
    @media screen and (max-width: 350px) {
        padding: 2rem .25rem 4rem;
    }

    @media screen and (max-width: 767px) {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: var(--first-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: var(--bs-hard);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }

    @media screen and (min-width: 768px) {
        position: fixed;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: var(--first-color);
        box-shadow: 0 5px 4px rgba(0,0,0,.15);
        border-radius: 0 0 1.5rem 1.5rem;
        transition: .3s;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-left: auto;
    }
    
    @media screen and (min-width: 1024px) {
        position: relative;
        top: 0;
        height: 0;
        transition: none;
        justify-content: flex-end;
        gap: 2rem;
    }

    &.active {
        bottom: 0;

        @media screen and (min-width: 768px) {
            top: calc(var(--header-height) + 1.5rem);
        }
    }
`

export const TopbarLandingNavList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 350px) {
        gap: 0;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        gap: 2rem;
    }
`

export const TopbarLandingNavLink = styled(Scroll)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--container-color);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        color: #FFFFFF;
    }

    @media screen and (min-width: 1024px) {
        font-size: var(--normal-font-size);
    }
`

export const TopbarLandingNavIcon = styled.div`
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

export const TopbarLandingNavButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`

export const TopbarLandingNavButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 0;
    border: 1px solid var(--container-color);
    color: var(--container-color);
    width: 100px;
    border-radius: 8px;
    transition: .3s ease;

    &:hover {
        border-color: transparent;
        background-color: var(--container-color);
        color: var(--custom-color-1);
        box-shadow: var(--bs-smooth);
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100px;
        padding: 7px 0;
    }
`

export const TopbarLandingNavToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const TopbarLandingNavToggleMenu = styled.div`
    color: var(--container-color);
    font-weight: var(--font-medium);
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 1001;
    transition: .3s ease;

    &:hover {
        color: #FFFFFF;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`