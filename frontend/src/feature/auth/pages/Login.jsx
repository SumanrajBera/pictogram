import React, { useState } from 'react'
import FormGrp from '../components/FormGrp'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import { toast } from 'react-toastify'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { loginUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!username || !password) {
      toast.error("Username and Password are required")
      return;
    }

    await loginUser(username, password)
    navigate("/")
  }

  return (
    <div className="form_page">
      <div className="form_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGrp fieldname={"Username or Email"} type={"text"} idName={"username"} value={username} func={setUsername} />
          <FormGrp fieldname={"Password"} type={"password"} idName={"password"} value={password} func={setPassword} />
          <button>Login</button>
        </form>
        <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
      </div>
    </div>
  )
}

export default Login