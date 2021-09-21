import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../tools/axiosWithAuth.js';

function Signup() {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        role: ''
    })
    const [error, setError] = useState('');
    const {push} = useHistory();

    const handleChange = (event) => {
        const { checked, value, name, type } = event.target;
        const valueToUse = (type === 'checkbox') ? checked:value;

        setNewUser({
            ...newUser,
            [name]: valueToUse
        })
    }

    const submitNewUser = (event) => {
        event.preventDefault();

        console.log(newUser);
        if(newUser.role==='instructor'){push('/dashboard-instructor');}
        else {push('/dashboard-client');}
    }

    return (
        <div className='bg-gym bg-cover bg-opacity-10 h-screen flex flex-col justify-center'>
          <form className='flex flex-col h-1/2 w-2/5 justify-around align-center self-center bg-gray-50 bg-opacity-60 text-lg'
                onSubmit={submitNewUser}>

            <label>Username:
              <input type='text'
                     placeholder=' desired username'
                     name='username'
                     value={newUser.username}
                     onChange={handleChange} />
            </label>

            <label>Password:
              <input type='text'
                     placeholder=' desired password'
                     name='password' 
                     value={newUser.password}
                     onChange={handleChange}/>
            </label>

            <div className='flex justify-evenly'>
              <label>Instructor:
                <input type='radio'
                       name='role'
                       value='instructor'
                       checked={newUser.role==='instructor'}
                       onChange={handleChange}/>
              </label>

              <label>Client:
                <input type='radio'
                       name='role'
                       value='client'
                       checked={newUser.role==='client'}
                       onChange={handleChange}/>
              </label>
            </div>

            <button className="w-3/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full self-center"
                    type='submit'>Register</button>
          </form>
        </div>
    );
}

export default Signup;