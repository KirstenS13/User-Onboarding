//import React
import React from 'react';

/* the Form needs:
    Name
    Email
    Password
    Checkbox (Terms and Conditions)
    Submit Button
*/

//create Form function to render the form
function Form(){
    //State, functions, hooks in here (outside the return)

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
                />
            </label>
        </form>
    );
}

//default export the form
export default Form;