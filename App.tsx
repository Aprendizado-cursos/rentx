import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Home } from "./src/screens/Home";
import { CarDetails } from "./src/screens/CarDetails";
import { Scheduling } from "./src/screens/Scheduling";
import theme from "./src/styles/theme";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";

export default function App() {
    let [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <SchedulingDetails></SchedulingDetails>
        </ThemeProvider>
    );
}
