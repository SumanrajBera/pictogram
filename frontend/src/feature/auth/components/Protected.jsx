import React, { useEffect } from 'react'
import { useAuth } from '../hook/useAuth'
import { Navigate, Outlet, useNavigate } from 'react-router'

const Protected = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default Protected