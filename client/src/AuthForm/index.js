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
    const [formState, setFormState] = useState(initialFormState);
    const {state, checkAuth} = useContext(IsAuthContext);
    
    const handleInputChange = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }

    const  submitSignIn = (e) => {
        e.preventDefault();
        const {email, password} = formState
        console.log({email: email, password: password})
        API.signIn({email: email, password: password}).then((res) => {

            checkAuth()
        })
        

    }
    const submitSignUp = (e) => {
        e.preventDefault();
        const {name, email, password, password_confirmation} = formState
        console.log({email: email, password: password})
        API.signUp({name: name, email: email, password: password, password_confirmation: password_confirmation}).then((res) => {

            checkAuth()
        })
    }
    const submitSignOut = (e) => {
        e.preventDefault();
       
        API.signOut().then((res) => {

            checkAuth()
        })
        

    }
    useEffect(() => {
        console.log(formState);
        
        console.log(state);
    }, [formState])

    
    return (
        <div>
            <SignIn handleInputChange={handleInputChange} submit={submitSignIn}/>
            <br></br>
            <hr></hr>
            <SignUp handleInputChange={handleInputChange} submit={submitSignUp}/>
            <hr></hr>

            <SignOut submit={submitSignOut}/>
        </div>
    )


}

export default AuthForm
