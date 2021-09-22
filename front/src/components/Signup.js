import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../tools/axiosWithAuth.js';
import * as yup from 'yup';


//form schema using yup
const schema = yup.object().shape({
  username: yup.string().required('name is required').min(2),
  password: yup.string().required('name is required').min(5),
  role: yup.string().oneOf(['instructor','client']),
})


function Signup() {
    //setting up state
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: '',
    })
    const [disabled, setDisabled] = useState(true);
    const {push} = useHistory();
    const errors = '*all fields are required*';

    //function for updating form values with each user action
    const handleChange = (event) => {
        const { checked, value, name, type } = event.target;
        const valueToUse = (type === 'checkbox') ? checked:value;

        setForm({
            ...form,
            [name]: valueToUse
        })
    }

    //function to check if form entry is valid according to schema to turn off error message
    useEffect(() => {
      schema.isValid(form)
            .then(valid => setDisabled(!valid))
    },[form]);

    //function for handling user registration
    const submitNewUser = (event) => {
        event.preventDefault();

        const newUser = {
          user_name: form.username,
          password: form.password,
          authcode: (form.role==='instructor') ? 'instructorsPass' : "",
        }
        

        //imported axiosWithAuth posts to '/register' and then routes new user to correct page based on role
        axiosWithAuth().post('/register', newUser)
                       .then(res => {return 
                             console.log(res);
                             if(newUser.authcode==='instructorsPass'){push('/dashboard-instructor');}
                             else {push('/dashboard-client');}
                            })
                       .catch(err => {
                              console.log('uh-oh, you were not able to register', err.data.message) 
                             })
        
    }

    return (
        <div className='bg-gym bg-cover bg-opacity-10 h-screen flex flex-col justify-center'>
          <form className='flex flex-col h-1/2 w-2/5 justify-around align-center self-center bg-gray-50 bg-opacity-60 text-lg'
                onSubmit={submitNewUser}>

            <label>Username:
              <input type='text'
                     placeholder=' desired username'
                     name='username'
                     value={form.username}
                     onChange={handleChange} />
            </label>

            <label>Password:
              <input type='text'
                     placeholder=' desired password'
                     name='password' 
                     value={form.password}
                     onChange={handleChange}/>
            </label>

            <div className='flex justify-evenly'>
              <label>Instructor:
                <input type='radio'
                       name='role'
                       value='instructor'
                       checked={form.role==='instructor'}
                       onChange={handleChange}/>
              </label>

              <label>Client:
                <input type='radio'
                       name='role'
                       value='client'
                       checked={form.role==='client'}
                       onChange={handleChange}/>
              </label>
            </div>

            <button className="w-3/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full self-center"
                    type='submit'
                    disabled={disabled}>Register</button>
                    
            {disabled && <p>{errors}</p>}
          </form>
        </div>
    );
}

export default Signup;
