import styled from "styled-components";

export const SectionContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 3rem);
    padding: 2rem 0 2rem;
    background: var(--first-color);
    
    @media screen and (min-width: 768px) {
        height: 100vh;
        padding: 3.6rem 5rem 3.6rem;
    }
`

export const SectionContactTitle = styled.h2`
    font-size: var(--h1-font-size);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
    position: relative;
    color: #FFFFFF;

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