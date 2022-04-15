import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import Form from './components/pages/Form'
import Navbar from './components/layout/Navbar'
import Login from './components/pages/Login'
import Welcome from './components/pages/Welcome'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'
import Document from './components/pages/Document'
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import axios from 'axios'

function App() {
  // state wi the user data when the user is logged in
  const [currentUser, setCurrentUser] = useState(null)
  const [document, setDocument] = useState([])

  // useEffect to get all of the documents from the server
  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/document")
      .then((response) => {
        setDocument(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect that handles localstorage if the user navigates away fro mthe page/refreshes
  useEffect(() => { 
    const token = localStorage.getItem('jwt')
    // if a toekn is found, log the user in, otherwise make sure they are logged out
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])
  // logout handleer function that deletes a token from localstorage
  const handleLogout = () => {
    // remove the token from local storage
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    // set the user state to be null
    setCurrentUser(null)
  }
    return (
    <Router>
      <Navbar handleLogout={handleLogout} currentUser={currentUser}/>

      <div className="container">
        <Routes>
          <Route 
            path='/'
            element={<Welcome />}
          />

          <Route 
            path='/form'
            element={<Form />}
          />

          <Route 
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />
          
          <Route 
            path="/document"    // here i put Navigate to /document instead of / bc not showing info
            element={currentUser ? <Document document={document} /> : <Navigate to="/document" />}
          /> 
          
          <Route 
            path="/profile"
            element={currentUser ? <Profile  currentUser={currentUser} /> : <Navigate to="/login" />}
          />

          <Route 
            path="/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
