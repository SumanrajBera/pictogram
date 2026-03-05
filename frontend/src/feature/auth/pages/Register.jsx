import React, { useState } from 'react'
import FormGrp from '../components/FormGrp'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!username || !email || !password) {
      toast.error("Username, Email and Password are required")
      return;
    }

    console.log(username, password)
  }


  return (
    <div className="form_page">
      <div className="form_container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGrp fieldname={"Username"} type={"text"} idName={"username"} value={username} func={setUsername} />
          <FormGrp fieldname={"Email"} type={"email"} idName={"email"} value={email} func={setEmail} />
          <FormGrp fieldname={"Password"} type={"password"} idName={"password"} value={password} func={setPassword} />
          <button>Create account</button>
        </form>
        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    </div>
  )
}

export default Register