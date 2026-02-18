import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase"
import { updateProfile } from "firebase/auth"
import FormInput from "../form-input/FormInput"
import './SignUpForm.styles.scss'
import Button from "../button/button"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault()
            try {
                if (password !== confirmPassword) {
                    alert('passwords do not match');
                    return;
                }
                if (password.length < 6) {
                    alert('password must has 6 or more characters');
                    return;
                }
                const userCredential = await createAuthUserWithEmailAndPassword(email, password);
                await updateProfile(userCredential.user, {
                    displayName: displayName
                })
                await createUserDocumentFromAuth(userCredential.user);
                resetFormFields();
            } catch(err) {
                if (err.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use')
                } else {
                    console.log('error during signup', err.code, err.message)
                }
            }
        }

        

    }
    handleSubmit();
;
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})

    };

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" inputOptions = {{ type: "text", required: true, onChange: handleChange, name: "displayName", value: displayName }}/>
                <FormInput label="Email" inputOptions= {{ type: "email", required: true, onChange: handleChange, name: "email", value: email }}/>
                <FormInput label="Password"  inputOptions = {{ type: "password", required: true, onChange: handleChange, name: "password", value: password }}/>
                <FormInput label="Confirm Password" inputOptions = {{ type: "password", required: true, onChange: handleChange, name: "confirmPassword", value: confirmPassword }}/>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm