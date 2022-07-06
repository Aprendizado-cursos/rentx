import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Scheduling } from "../screens/Scheduling";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Screen name="SignIn" component={SignIn}></Screen>
            <Screen name="SignUpFirstStep" component={SignUpFirstStep}></Screen>
            <Screen name="SignUpSecondStep" component={SignUpSecondStep}></Screen>
            <Screen name="Home" component={Home} options={{ gestureEnabled: false }}></Screen>
            <Screen name="MyCars" component={MyCars}></Screen>
            <Screen name="CarDetails" component={CarDetails}></Screen>
            <Screen name="Scheduling" component={Scheduling}></Screen>
            <Screen name="SchedulingDetails" component={SchedulingDetails}></Screen>
            <Screen name="Confirmation" component={Confirmation}></Screen>
        </Navigator>
    );
}
