import styled from "styled-components";

export interface TextFieldStyleProps {
    margin?: string
    fullWidth?: boolean
}

// Input Animation
export const TextFieldAnimationContainer = styled.div<TextFieldStyleProps>`
    margin: ${({ margin }) => {
        if (margin === "normal") {
            return "20px"
        } else {
            return margin
        }
    }};
    width: ${({fullWidth}) => fullWidth ? "100%" : "200px"};
`

export const TextFieldAnimationField = styled.input`
    
`

export const TextFieldAnimationLabel = styled.label`

`