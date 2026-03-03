import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './feature/auth/pages/Login'
import Register from './feature/auth/pages/Register'
import Protected from './feature/auth/components/Protected'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected><h1>Welcome to Pictogram</h1></Protected>
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