import { FC, ReactNode } from "react"
import { FormContainer } from "./Form.elements"

interface FormProps {
    children?: ReactNode
}

const Form: FC<FormProps> = ({ children }) => {
    return (
        <>
            <FormContainer>
                { children }
            </FormContainer>
        </>
    )
}

export default Form