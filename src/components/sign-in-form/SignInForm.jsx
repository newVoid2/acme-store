import { useState} from "react";
import { signInWithGooglePopup, signInWithAuthCredential } from "../../utilities/firebase/firebase";
import Button from "../button/button";
import FormInput from "../form-input/FormInput";
import './SignInForm.styles.scss'

const defaultSignInFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [signInFields, setSignInFields] = useState(defaultSignInFields);
    const { email, password } = signInFields;
    const resetFormFields = () => {
        setSignInFields(defaultSignInFields);
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault()
            try {

                await signInWithAuthCredential(email, password);
                resetFormFields();
            } catch(err) {
                if (err.code === 'auth/invalid-credential') {
                    alert("Wrong email and password");
                }
            }
        }  
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSignInFields({...signInFields, [name]: value})

    };

    return(
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" inputOptions= {{ type: "email", required: true, onChange: handleChange, name: "email", value: email }}/>
                <FormInput label="Password"  inputOptions = {{ type: "password", required: true, onChange: handleChange, name: "password", value: password }}/>
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType= 'google' onClick={logGoogleUser}>Sign in with Google</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;