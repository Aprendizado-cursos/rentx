import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./stack.routes";

interface routesProps {}

export function Routes({}: routesProps) {
    return (
        <NavigationContainer>
            <StackRoutes></StackRoutes>
        </NavigationContainer>
    );
}
