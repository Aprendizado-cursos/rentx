import React from "react";
import LottieView from "lottie-react-native";
import { Container } from "./styles";
import loadingCar from "../../assets/loadingCar.json";

interface LoadAnimationProps {}

export function LoadAnimation({}: LoadAnimationProps) {
    return (
        <Container>
            <LottieView autoPlay loop source={loadingCar} style={{ height: 180 }} resizeMode="contain" />
        </Container>
    );
}
