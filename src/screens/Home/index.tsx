import React from "react";
import { StatusBar } from "react-native";

import { Container, Header, TotalCars, HeaderContent } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

interface HomeProps {}

export function Home({}: HomeProps) {
    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <Header>
                <HeaderContent>
                    <Logo height={RFValue(12)} width={RFValue(118)}></Logo>
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>
        </Container>
    );
}
