import React, {useState} from 'react';

function Signup() {
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        password: '',
        instructor: false,
        client: false
    })

    const handleChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }

    const submitNewUser = (event) => {
        event.preventDefault();


    }

    return (
        <div className='bg-gym bg-cover bg-opacity-10 h-screen flex flex-col justify-center'>
          <form className='flex flex-col h-3/5 w-2/5 justify-around align-center self-center bg-gray-50 bg-opacity-60'
                onSubmit={submitNewUser}>
            <label>Name:
              <input type='text' 
                     placeholder=' full name'
                     name='name'
                     value={newUser.name}
                     onChange={handleChange} />
            </label>

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
                       name='instructor'
                       value={newUser.instructor}
                       onChange={handleChange}/>
              </label>

              <label>Client:
                <input type='radio'
                       name='client'
                       value={newUser.client}
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