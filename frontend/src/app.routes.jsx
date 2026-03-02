import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './feature/auth/pages/Login'
import Register from './feature/auth/pages/Register'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Welcome to Pictogram</h1>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])