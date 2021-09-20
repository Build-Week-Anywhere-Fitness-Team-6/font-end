import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import InstructorPage from './components/InstructorPage'
import InstructorForm from './components/InstructorForm'
import ClientPage from './components/ClientPage'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
      <Router>

      <header>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" to="/login">Login</Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Logout</button>
      </header>

      <Switch>

      <Route path="/dashboard-instructor/form">
        <InstructorForm />
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
