import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage"
import Posts from "./Posts"
import Signup from "./Signup"
import Login from "./Login"


function App() {
    return (
      <div className="App">
        <Routes>
          <Route path='/Signup' element={<Signup /> }/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile /> }/>
          <Route path='/Posts' element={<Post />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    );
  }



