import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { getMe, login, register } from "../services/auth.api"
import { toast } from 'react-toastify'

export function useAuth() {
    let { user, setUser, loading, setLoading } = useContext(AuthContext)

    async function registerUser(username, email, password) {
        setLoading(true)
        let data = await register(username, email, password)
        setUser(data.user)
        setLoading(false)
    }

    async function loginUser(username, password) {
        try {
            setLoading(true)
            let data = await login(username, password)
            setUser(data.user)
            toast.success("Welcome " + data.user.username)
        } catch (err) {
            setUser(null)
            toast.error("Login failed")
        } finally {
            setLoading(false)
        }

    }

    async function get_me() {
        try {
            setLoading(true)
            let data = await getMe()
            setUser(data.user)
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user === null) {
            get_me()
        }
    }, [])

    return {
        user, setUser, loading, setLoading, registerUser, loginUser, get_me
    }
}