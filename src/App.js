import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    name: '',
    street_address:'',
    city_st_zip:'',
    price1: 129,
    price2: 349,
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
  // handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
  // handleChange = ({ target: { value, street_address }}) => this.setState({ [street_address]: value })
  // handleChange = ({ target: { value, city_st_zip }}) => this.setState({ [city_st_zip]: value })

  createAndDownloadPdf = () => {
    console.log(this.state)
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Full Legal Name" name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="Street Address" name="street_address" onChange={this.handleChange}/>
        <input type="text" placeholder="City, State ZIP" name="city_st_zip" onChange={this.handleChange}/>
        <input type="number" placeholder="Price of CA Will Package" name="price1" onChange={this.handleChange} />
        <input type="number" placeholder="Price of CA Estate Plan" name="price2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;


// ----------- changes 4-16 -----------------------------------

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from 'react-router-dom'


// import Navbar from './components/layout/Navbar'
// import Login from './components/pages/Login'
// import Welcome from './components/pages/Welcome'
// import Register from './components/pages/Register'
// import Profile from './components/pages/Profile'
// import Document from './components/pages/Document'
// import { useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode'
// import axios from 'axios'
// import Form from './components/pages/Form'

// function App() {
//   // state wi the user data when the user is logged in
//   const [currentUser, setCurrentUser] = useState(null)
//   const [document, setDocument] = useState([])

//   // useEffect to get all of the documents from the server
//   useEffect(() => {
//     axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/document")
//       .then((response) => {
//         setDocument(response.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   // useEffect that handles localstorage if the user navigates away fro mthe page/refreshes
//   useEffect(() => { 
//     const token = localStorage.getItem('jwt')
//     // if a toekn is found, log the user in, otherwise make sure they are logged out
//     if (token) {
//       setCurrentUser(jwt_decode(token))
//     } else {
//       setCurrentUser(null)
//     }
//   }, [])
//   // logout handleer function that deletes a token from localstorage
//   const handleLogout = () => {
//     // remove the token from local storage
//     if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
//     // set the user state to be null
//     setCurrentUser(null)
//   }
//     return (
//     <Router>
//       <Navbar handleLogout={handleLogout} currentUser={currentUser}/>

//       <div className="container">
//         <Routes>
//           <Route 
//             path='/'
//             element={<Welcome />}
//           />

//           <Route 
//             path="/login"
//             element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
//           />
          
//           <Route 
//             path='/form'
//             element={currentUser ? <Form document={document} /> : <Navigate to="/form" />}
//           />

//           <Route 
//             path="/document"    // here i put Navigate to /document instead of / bc not showing info
//             element={currentUser ? <Document document={document} /> : <Navigate to="/document" />}
//           /> 
          
//           <Route 
//             path="/profile"
//             element={currentUser ? <Profile  currentUser={currentUser} /> : <Navigate to="/login" />}
//           />

//           <Route 
//             path="/register"
//             element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
//           />

//         </Routes>
//       </div>
//     </Router>
//   );
// }


