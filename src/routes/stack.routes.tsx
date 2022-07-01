import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Screen name="Splash" component={Splash}></Screen>
            <Screen name="Home" component={Home} options={{ gestureEnabled: false }}></Screen>
            <Screen name="MyCars" component={MyCars}></Screen>
            <Screen name="CarDetails" component={CarDetails}></Screen>
            <Screen name="Scheduling" component={Scheduling}></Screen>
            <Screen name="SchedulingDetails" component={SchedulingDetails}></Screen>
            <Screen name="SchedulingComplete" component={SchedulingComplete}></Screen>
        </Navigator>
    );
}
