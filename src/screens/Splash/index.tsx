import React from "react";
import { StatusBar } from "react-native";

import { Container } from "./styles";

interface SplashProps {}

export function Splash({}: SplashProps) {
    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
        </Container>
    );
}
