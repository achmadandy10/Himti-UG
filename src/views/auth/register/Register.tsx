import Form from "../../../components/form/Form"
import TextField from "../../../components/text_field/TextField"
import { RegisterContainer, RegisterContentLeft, RegisterContentRight, RegisterTitle } from "./Register.elements"

const Register = () => {
    return (
        <>
            <RegisterContainer>
                <RegisterContentLeft>
                    
                </RegisterContentLeft>

                <RegisterContentRight>
                    <RegisterTitle>Created an Account!</RegisterTitle>
                    
                    <Form>
                        <TextField
                            autoFocus
                            id="npm"
                            name="npm"
                            label="NPM"
                            autoComplete="npm"
                        />
                    </Form>
                </RegisterContentRight>
            </RegisterContainer>
        </>
    )
}

export default Register