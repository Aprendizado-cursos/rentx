import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home}></Screen>
            <Screen name="CarDetails" component={CarDetails}></Screen>
            <Screen name="Scheduling" component={Scheduling}></Screen>
            <Screen name="SchedulingDetails" component={SchedulingDetails}></Screen>
            <Screen name="SchedulingComplete" component={SchedulingComplete}></Screen>
        </Navigator>
    );
}
