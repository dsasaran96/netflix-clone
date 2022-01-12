import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const history = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    
    const [firstName, setFirstName] = useState('')
    const [emailAdress, setEmailAdress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const isInvalid = firstName === '' || password === '' || emailAdress === ''

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAdress, password)
            .then((result) => 
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    }).then(() => {
                        history(ROUTES.BROWSE)
                    })
            )
            .catch((error) => {
                setEmailAdress('')
                setPassword('')
                setFirstName('')
                setError(error.message.slice(9).split('.')[0] + '.')
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input placeholder="First name" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
                        <Form.Input placeholder="Email adress" value={emailAdress} onChange={({ target }) => setEmailAdress(target.value)} />
                        <Form.Input placeholder="Password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} autoComplete="off"/>
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                        <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up now!</Form.Link></Form.Text>
                        <Form.TextSmall>This page is protected by Google reCAPTCHA please don't spam me.</Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}