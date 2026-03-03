import React from 'react'
import { useAuth } from '../hook/useAuth'

const Protected = ({ children }) => {
    const { loading } = useAuth()

    if (loading) {
        return <h1>Loading...</h1>
    }

    return children
}

export default Protected