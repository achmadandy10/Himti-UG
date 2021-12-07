import { FC } from "react"
import { TextFieldAnimationContainer, TextFieldAnimationField, TextFieldAnimationLabel } from "./TextField.elements"

interface TextFieldProps {
    margin?: string
    required?: boolean
    fullWidth?: boolean
    type?: string
    id: string
    name: string
    autoComplete?: string
    label: string
    autoFocus?: boolean
    disabled?: boolean
    readOnly?: boolean
    defaultValue?: string
}

export const TextFieldAnimation: FC<TextFieldProps> = ({margin, required, fullWidth, type, id, name, autoComplete, label, autoFocus, disabled, readOnly, defaultValue}) => {
    return (
        <>
            <TextFieldAnimationContainer margin={  margin ? margin : "0" } fullWidth={ fullWidth }>
                <TextFieldAnimationField type={ type ? type : "text" } name={ name } id={ id } required={ required } disabled={ disabled } readOnly={ readOnly } defaultValue={ defaultValue } autoComplete={ autoComplete } autoFocus={ autoFocus }/>
                <TextFieldAnimationLabel htmlFor={ id }>{ label }</TextFieldAnimationLabel>
            </TextFieldAnimationContainer>
        </>
    )
}