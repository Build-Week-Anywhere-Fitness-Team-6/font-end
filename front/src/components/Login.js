import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    user_name: "",
    password: "",
    authcode: ""
  });
  const [error, setError] = useState("");
  const history = useHistory()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
   console.log(user)
    e.preventDefault();
    axios
      .post("https://fitness-bw.herokuapp.com/api/auth/login", user)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
       if(res.data.role === "Client"){
         history.push("/dashboard-client")
       } else{
        history.push("/dashboard-instructor")
       }
        
      })
      .catch(err=>{
          console.log(err);
          console.log(err.response.data['message']);
          setError("Please Try Again")
      })
  };
  return (
    <div className="flex flex-col  p-5 mt-20 m-auto w-1/3 rounded-lg shadow-xl bg-yellow-100">
      <h2 className="font-bold text-xl mb-3 p-3">Please Login</h2>
      <div>
        <form className="flex-col w-2/3"
          onSubmit={handleSubmit}
          data-testid="loginForm"
          className="login-form"
        >
            <div className=" flex flex-col items-center gap-3">
            <input className="shadow appearance-none border roundedpy-2 px-3 text-gray-700 leading-tight focus:outline-none text-center focus:shadow-outline block"
                name="user_name"
                type="text"
                id="username"
                value={user.user_name}
                onChange={handleChange}
                placeholder="--- username ---"
            />
            <input className="shadow appearance-none border roundedpy-2 px-3 text-gray-700 leading-tight focus:outline-none text-center focus:shadow-outline block"
                name="password"
                type="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                placeholder="--- password ---"
            />
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded block" id="submit" type="submit" onClick={handleSubmit}>
                Log-In
            </button>
            </div>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
}

export default Login;
