import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const RegisterContentLeft = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--first-color);
`

export const RegisterContentRight = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const RegisterTitle = styled.h2`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`
