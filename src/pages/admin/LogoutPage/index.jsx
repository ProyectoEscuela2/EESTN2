import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function AdminLogoutPage() {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, []);

    return <Navigate to="/login" />
}
