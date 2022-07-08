import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../hooks/auth";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

interface routesProps {}

export function Routes({}: routesProps) {
    const { user } = useAuth();

    return (
        <NavigationContainer>{user.id ? <AppTabRoutes></AppTabRoutes> : <AuthRoutes></AuthRoutes>}</NavigationContainer>
    );
}
