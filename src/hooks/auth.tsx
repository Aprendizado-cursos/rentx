import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface User {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState);

    async function signIn(credentials: SignInCredentials) {
        const response = await api.post("sessions", credentials);
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        setData(response.data);
    }

    return <AuthContext.Provider value={{ user: data.user, signIn }}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
