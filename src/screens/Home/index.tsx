import React from "react";
import { StatusBar } from "react-native";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

interface HomeProps {}

export function Home({}: HomeProps) {
    const thumb = "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png";

    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <Header>
                <HeaderContent>
                    <Logo height={RFValue(12)} width={RFValue(118)}></Logo>
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>

            <CarList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => (
                    <Car brand="audi" name="RS 5 Coupé" rent={{ period: "AO DIA", price: 120 }} thumbnail={thumb}></Car>
                )}></CarList>
        </Container>
    );
}
