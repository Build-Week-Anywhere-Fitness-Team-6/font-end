import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
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
    e.preventDefault();
    axios
      .post("url", user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        if (res.data.payload === "instructor") {
          history.push("/dashboard-instructor");
        } else {
          history.push("/dashboard-client");
        }
      })
      .catch(err=>{
          console.log(err)
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
                name="username"
                type="text"
                id="username"
                value={user.username}
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
