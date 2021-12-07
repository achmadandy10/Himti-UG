import { TextFieldAnimation } from "../../../components/text_field/TextField"
import { RegisterContainer, RegisterContentLeft, RegisterContentRight, RegisterTitle } from "./Register.elements"

const Register = () => {
    return (
        <>
            <RegisterContainer>
                <RegisterContentLeft>
                    
                </RegisterContentLeft>

                <RegisterContentRight>
                    <RegisterTitle>Created an Account!</RegisterTitle>
                    <TextFieldAnimation
                        
                    />
                </RegisterContentRight>
            </RegisterContainer>
        </>
    )
}

export default Register