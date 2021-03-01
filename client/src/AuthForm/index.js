import React, {useState, useEffect, useContext} from 'react'
import API from '../utils/API'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './signOut'

import { IsAuthContext } from "./isAuthContext";

const AuthForm = () => {
   
    const initialFormState = {
        name: "", 
        email: "",
        password: ""
    }
    // Set up our useState hook
    const [formState, setFormState] = useState(initialFormState);
     
    // Bring in our global context items for checking authorization status
    const {state, checkAuth} = useContext(IsAuthContext);
    
    // On change event handler
    const handleInputChange = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }
    
    //  Sign In button handler
    const  submitSignIn = (e) => {
        e.preventDefault();
        const {email, password} = formState
        
        console.log({email: email, password: password})
        
        API.signIn({email: email, password: password}).then(({ data }) => {
            console.log("data: ", data);

            checkAuth()
        })
    }
    //  Sign Up button handler

    const submitSignUp = (e) => {
        e.preventDefault();
        const {name, email, password, password_confirmation} = formState
        
        console.log({email: email, password: password})
        
        API.signUp({name: name, email: email, password: password, password_confirmation: password_confirmation}).then((res) => {
            console.log(res.data);
            errorHandler(res.data)
            checkAuth()
        })
    }
    
    // Function for switching between forms
    const [formType, setFormType] = useState("signUp");

    const switchForm = (e) => {
        e.preventDefault();
        setFormType(e.target.name)
    }

    useEffect(() => {
        console.log(formState);
        console.log(state);
    }, [formState])

    // Error handling 
    const [errors, setErrors] = useState([])
    const errorHandler = (res) => {
        const err = res.errors

        err ? setErrors(...errors, err) : setErrors(...errors)
    }

    return (
        <div>
            { formType === "signIn" && <SignIn handleInputChange={handleInputChange} submit={submitSignIn} switch={switchForm}/>}
            { formType === "signUp" && <SignUp handleInputChange={handleInputChange} submit={submitSignUp} switch={switchForm}/>}
        </div>
    )


}

export default AuthForm
