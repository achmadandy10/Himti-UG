import styled from "styled-components";

export const ScrollToTopContainer = styled.div`
    position: fixed;
    bottom: calc(3rem + 10px);
    right: 10px;
    background-color: var(--first-color);
    padding: 5px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    z-index: var(--z-tooltip);
    cursor: pointer;
    transition: .3s ease;
    color: var(--container-color);

    &.active {
        display: flex;
    }
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--bs-smooth);
        color: #FFFFFF;
    }
    
    @media screen and (min-width: 768px) {
        bottom: 20px;
        font-size: var(--h2-font-size);
    }
    
    @media screen and (min-width: 1024px) {
        font-size: var(--h1-font-size);
    }
`