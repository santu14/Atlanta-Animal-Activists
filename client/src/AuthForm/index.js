import React, {useState, useEffect, useContext} from 'react'
import API from '../utils/API'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './signOut'


import { IsAuthContext } from "./isAuthContext";




const AuthForm = () => {
   
    // Initial form state
    const initialFormState = {
        name: "", 
        email: "",
        password: ""
    }
    // Set up our useState hook
    const [formState, setFormState] = useState(initialFormState);
    const [formType, setFormType] = useState("signUp");


    // Bring in our global context items for checking authorization status
    const {state, checkAuth} = useContext(IsAuthContext);
    
    // On change event handler
    const handleInputChange = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }

    const  submitSignIn = (e) => {
        e.preventDefault();
        const {email, password} = formState
        console.log({email: email, password: password})
        API.signIn({email: email, password: password}).then((res) => {
            console.log(res);
            checkAuth()
        })
    }
    const submitSignUp = (e) => {
        e.preventDefault();
        const {name, email, password, password_confirmation} = formState
        console.log({email: email, password: password})
        API.signUp({name: name, email: email, password: password, password_confirmation: password_confirmation}).then((res) => {
            console.log(res);
            checkAuth()
        })
    }
    const submitSignOut = (e) => {
        e.preventDefault();
        API.signOut().then((res) => {
            console.log(res);
            checkAuth()
        })
    }

    const switchForm = (e) => {
        e.preventDefault();
        setFormType(e.target.name)
    }

    useEffect(() => {
        console.log(formState);
        
        console.log(state);
    }, [formState])

    
    return (
        <div>
            { formType === "signIn" && <SignIn handleInputChange={handleInputChange} submit={submitSignIn} switch={switchForm}/>}
            { formType === "signUp" && <SignUp handleInputChange={handleInputChange} submit={submitSignUp} switch={switchForm}/>}
            
           

            {/* <SignOut submit={submitSignOut}/> */}
        </div>
    )


}

export default AuthForm
