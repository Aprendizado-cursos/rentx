import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { CarDetails } from "../screens/CarDetails";
import { Confirmation } from "../screens/Confirmation";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Splash } from "../screens/Splash";

const { Screen, Navigator } = createStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Screen name="Home" component={Home}></Screen>
            <Screen name="CarDetails" component={CarDetails}></Screen>
            <Screen name="Scheduling" component={Scheduling}></Screen>
            <Screen name="SchedulingDetails" component={SchedulingDetails}></Screen>
            <Screen name="Confirmation" component={Confirmation}></Screen>
            <Screen name="MyCars" component={MyCars}></Screen>
        </Navigator>
    );
}
