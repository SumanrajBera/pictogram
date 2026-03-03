import { useContext } from "react";
import { AuthContext } from "../auth.context";

export function useAuth() {
    let { user, setUser, loading, setLoading } = useContext(AuthContext)

    return {
        user, setUser, loading, setLoading
    }
}