//import React and useState
import React, { useState } from 'react';
//import yup
import * as yup from 'yup';

/* the Form needs:
    Name
    Email
    Password
    Checkbox (Terms and Conditions)
    Submit Button
*/

//schema goes out here
let formSchema = yup.object().shape({
    name: yup.string().required('Please provide your full name'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Please enter your email address'),
    password: yup.string().required('Please create a password'),
    terms: yup.boolean().oneOf([true], 'Please accept Terms & Conditions')
});

//create Form function to render the form
function Form(){
    //State, functions, hooks in here (outside the return)

    //need state for the input
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    });

    //need state for the errors
    const [errorState, setErrorState] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    //function for validation

    //function for onChange
    const inputChange = e => {
        //determine if it needs checked for checkbox or value for other
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        //set the state when the form is changed
        setFormState({ ...formState, [e.target.name]: value });
        console.log(formState);
    }

    //function for submitting
    const submitForm = e => {
        e.preventDefault();
        console.log('Submitted!')
    }

    //JSX inside the return
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>
                Name:
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Enter your full name...'
                    value={formState.name}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='email'>
                Email:
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email...'
                    value={formState.email}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='password'>
                Password:
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Create a password...'
                    value={formState.password}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='terms'>
                Terms & Conditions
                <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    checked={formState.terms}
                    onChange={inputChange}
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

//default export the form
export default Form;