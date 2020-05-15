//import React and useState
import React, { useState } from 'react';
//import yup
import * as yup from 'yup';
//import axios
import axios from 'axios';

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
function Form(props){
    //State, functions, hooks in here (outside the return)

    //need state for the input
    //the error messages were not appearing, fixed it by setting the default values to null instead of an empty string
    const [formState, setFormState] = useState({
        name: null,
        email: null,
        password: null,
        terms: false
    });

    //need state for the errors
    const [errorState, setErrorState] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    //need state for returned data from server
    const [users, setUsers] = useState([]);

    //function for validation
    const validateForm = e => {
        //check if it is a checkbox
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name) //reach into this part of the schema
            .validate(value) //check this part of the object
            .then(valid => {
                //empty errorState if valid
                setErrorState({ ...errorState, [e.target.name]: '' });
            })
            .catch(err => {
                //add to errorState if invalid
                setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
            })
    };

    //function for onChange
    const inputChange = e => {
        //let us keep using the event
        e.persist();
        //validate the input
        validateForm(e);
        //determine if it needs checked for checkbox or value for other
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        //set the state when the form is changed
        setFormState({ ...formState, [e.target.name]: value });
    };

    //function for submitting
    const submitForm = e => {
        e.preventDefault(); //don't reload the page
        console.log('Submitted!')
        //send data to the server
        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {
                console.log(response);
                setUsers([...users, response]);
            })
            .catch(error => {
                console.log(error)
            })
        //clear the form
        setFormState({
            name: '',
            email: '',
            password: '',
            terms: false
        });
    };

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
                    //attribute for cypress testing
                    data-cy='name'
                />
                {errorState.name.length > 0 ? (<p>{errorState.name}</p>) : null}
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
                    //attribute for cypress testing
                    data-cy='email'
                />
                {errorState.email.length > 0 ? (<p>{errorState.email}</p>) : null}
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
                    //attribute for cypress testing
                    data-cy='password'
                />
                {errorState.password.length > 0 ? (<p>{errorState.password}</p>) : null}
            </label>
            <label htmlFor='terms'>
                Terms & Conditions
                <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    checked={formState.terms}
                    onChange={inputChange}
                    //attribute for cypress testing
                    data-cy='terms'
                />
                {errorState.terms.length > 0 ? (<p>{errorState.terms}</p>) : null}
            </label>
            <button
                //attribute for cypress testing
                data-cy='submit'
            >Submit</button>
            <pre
                //attribute for cypress testing
                data-cy='response'
            >{JSON.stringify(users, null, 2)}</pre>
        </form>
    );
}

//default export the form
export default Form;