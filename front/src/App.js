
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import InstructorPage from './components/InstructorPage'
import InstructorForm from './components/InstructorForm'
import ClientPage from './components/ClientPage'
import Signup from './components/Signup'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './validation/instructorFormSchema';
import axiosWithAuth from './tools/axiosWithAuth';


const initialFormValues = {
  name: '',
  type: '',
  time: '',
  day: '',
  duration: '',
  intensity: '',
  location: '',
  max_capacity: '',
  punch_pass: false,
}

const initialFormErrors = {
  name: '',
  type: '',
  time: '',
  day: '',
  duration: '',
  intensity: '',
  location: '',
  max_capacity: '',
}

const initialClasses = []
const initialDisabled = true


function App() {
  const [classes, setClasses] = useState(initialClasses)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewClass = newClass => {
    axiosWithAuth()
    .post('https://fitness-bw.herokuapp.com/api/classes/', newClass)
      .then(res => {
        console.log(res);
        setClasses([res.data, ...classes])
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]: value
      })
    }


  const formSubmit = () => {
    const newClass = {
      name: formValues.name.trim(),
      type: formValues.type.trim(),
      time: formValues.time.trim(),
      day: formValues.day.trim(),
      duration: formValues.duration.trim(),
      intensity: formValues.intensity.trim(),
      location: formValues.location.trim(),
      max_capacity: formValues.max_capacity.trim(),
      punch_pass: formValues.punch_pass,
    }
    postNewClass(newClass);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Router>

      <header>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" to="/login">Login</Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Logout</button>
      </header>

      <Switch>

      <Route path="/dashboard-instructor/form">
        <InstructorForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>

        <Route path="/dashboard-client">
          <ClientPage />
        </Route>

      <Route path="/dashboard-instructor">
        <InstructorPage />
      </Route>


        <Route path="/login">
          <Login />
        </Route>

      <Route path="/signup">
        <Signup />
      </Route>



        {/* <Route path="/">
          <MarketingPage />
        </Route> */}


      </Switch>
      </Router>
    </div>
  );
}

export default App;
