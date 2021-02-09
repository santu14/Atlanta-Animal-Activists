import React, {useState, useEffect} from 'react'
import API from '../utils/API'
import SignIn from './SignIn'
import SignUp from './SignUp'




const AuthForm = () => {

    const initialFormState = {
        name: "", 
        email: "",
        password: ""
    }
    const [formState, setFormState] = useState(initialFormState)

    const handleInputChange = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }

    const  submitSignIn = (e) => {
        e.preventDefault();
        const {email, password} = formState
        console.log({email: email, password: password})
        API.signIn({email: email, password: password})

    }
    const submitSignUp = (e) => {
        e.preventDefault();
        const {name, email, password, password_confirmation} = formState
        console.log({email: email, password: password})
        API.signUp({name: name, email: email, password: password, password_confirmation: password_confirmation})

    }
    useEffect(() => {
        console.log(formState);
    }, [formState])

    
    return (
        <div>
            <SignIn handleInputChange={handleInputChange} submit={submitSignIn}/>
            <br></br>
            <hr></hr>
            <SignUp handleInputChange={handleInputChange} submit={submitSignUp}/>
        </div>
    )


}

export default AuthForm
