//import React and useState
import React, { useState } from 'react';

/* the Form needs:
    Name
    Email
    Password
    Checkbox (Terms and Conditions)
    Submit Button
*/

//schema goes out here

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

    //JSX inside the return
    return (
        <form>
            <label htmlFor='name'>
                Name:
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Enter your full name...'
                    value={formState.name}
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
                />
            </label>
            <label htmlFor='terms'>
                Terms & Conditions
                <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                    checked={formState.terms}
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

//default export the form
export default Form;