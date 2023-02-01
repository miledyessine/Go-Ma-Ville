import React from "react";
import "./login.scss";
import * as Components from './Components';
import   { useState } from 'react';
import { useCookies } from "react-cookie";
import FormInput from "./FormInput";

const Login = () => {
    const [token,setToken]=useCookies(["user-token"]);
    const [signIn, toggle] = React.useState(true);
    const [data, setData] = useState();

    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    const [valuesCreate, setValuesCreate] = useState({
        username: "",
        city: "",
        email: "",
        password: "",        
    });
    const onChangeCreate = (e) => {
        setValuesCreate({ ...valuesCreate, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const inputs = [
        {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
        },
        {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter and 1 number!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
        },
    ];

    const inputsCreate = [
        {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
        },
        {
            id: 2,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage:
                "City name should be 3-16 characters and shouldn't include any special character!",
            label: "City",
            pattern: "^[A-Za-z]{3,16}$",
            required: true,
            },
        {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
        },
        {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter and 1 number!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
        },
    ];

    const submitLog = async (e) => {
        e.preventDefault()
        const user = {
            username: values.username, 
            password: values.password
        };
        const response=await fetch('http://127.0.0.1:8000/user/verif_user_login/', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type':'multipart/form-data; boundary=--------------------------499310528544182401120976',
            },
            body:JSON.stringify(user) 
        })
        const responseJson=await response.json();
        setToken("user-token",responseJson.usertoken);
    }; 
    
    const submitCreate = async (e) => {
        
        e.preventDefault()
        const user = {
            username: valuesCreate.username, 
            city: valuesCreate.city,
            email: valuesCreate.email,
            password: valuesCreate.password
        };
        const response=await fetch('http://127.0.0.1:8000/user/verif_user/', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type':'multipart/form-data; boundary=--------------------------499310528544182401120976',
            },
            body:JSON.stringify(user) 
        })
        const responseJson=await response.json();
        setToken("user-token",responseJson.usertoken);
    };
    
        
        return(
            <div className="comp_body"><h1 className="logTitle">Go Ma Ville</h1>
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form  onSubmit={handleSubmit} >
                            <Components.Title>Create Account</Components.Title>
                            {inputsCreate.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={valuesCreate[input.name]}
                                    onChange={onChangeCreate}
                                />
                                ))}
                            <Components.Button onClick={submitCreate}>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>
    
                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form >
                            <Components.Title>Log in</Components.Title>
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                                ))}
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button onClick={submitLog} >Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
    
                    <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sigin Up
                                </Components.GhostButton> 
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
        )
}

export default Login;
