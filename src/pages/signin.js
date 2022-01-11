import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const history = useNavigate();
    const [emailAdress, setEmailAdress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = password === '' || emailAdress === ''

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAdress, password)
            .then(() => {
                history(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message.slice(9).split('.')[0] + '.');
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
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