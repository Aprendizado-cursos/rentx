import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import AccelerationSvg from "../../assets/acceleration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import {
    Accessories,
    Brand,
    CalendarIcon,
    DateValue,
    CarImages,
    Container,
    Content,
    DateInfo,
    DateTitle,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    RentalPeriod,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceQuota,
    RentalPriceDetails,
    RentalPriceTotal,
} from "./styles";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

interface SchedulingDetailsProps {}

export function SchedulingDetails({}: SchedulingDetailsProps) {
    const theme = useTheme();

    const thumb = "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png";

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.navigate("Scheduling");
    }

    function handleConfirmScheduling() {
        navigation.navigate("SchedulingComplete");
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleReturn}></BackButton>
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={[thumb]}></ImageSlider>
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>AUDI</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>AO DIA</Period>
                        <Price>R$ 120,00</Price>
                    </Rent>
                </Details>
                <Accessories>
                    <Accessory name="380Km/h" icon={SpeedSvg}></Accessory>
                    <Accessory name="3.2s" icon={AccelerationSvg}></Accessory>
                    <Accessory name="800HP" icon={ForceSvg}></Accessory>
                    <Accessory name="Gasolina" icon={GasolineSvg}></Accessory>
                    <Accessory name="Auto" icon={ExchangeSvg}></Accessory>
                    <Accessory name="2 pessoas" icon={PeopleSvg}></Accessory>
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape}></Feather>
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2022</DateValue>
                    </DateInfo>
                    <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text}></Feather>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button title="Alugar agora" onPress={handleConfirmScheduling} color={theme.colors.success}></Button>
            </Footer>
        </Container>
    );
}
