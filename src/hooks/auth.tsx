import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { database } from "../database";
import { User as UserModel } from "../database/models/User";
import { api } from "../services/api";

interface User {
    id: string;
    user_id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    singOut(): Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<User>({} as User);

    async function signIn(credentials: SignInCredentials) {
        try {
            const { data } = await api.post("sessions", credentials);
            const { token, user } = data;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const userCollection = await database.get<UserModel>("users");
            await database.write(async () => {
                await userCollection.create((newUser) => {
                    newUser.user_id = user.id;
                    newUser.email = user.email;
                    newUser.name = user.name;
                    newUser.driver_license = user.driver_license;
                    newUser.avatar = user.avatar;
                    newUser.token = token;
                });
            });
            setData({ ...user, token });
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async function singOut() {
        try {
            const userCollection = await database.get<UserModel>("users");
            await database.write(async () => {
                const selectedUser = await userCollection.find(data.id);
                await selectedUser.destroyPermanently();
            });
            setData({} as User);
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    useEffect(() => {
        async function loadUserData() {
            const userCollection = database.get("users");

            const response = await userCollection.query().fetch();
            if (response.length) {
                const userData = response[0]._raw as unknown as User;
                api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
                setData(userData);
            }
        }

        loadUserData();
    }, []);

    return <AuthContext.Provider value={{ user: data, signIn, singOut }}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
