import React, { useMemo } from "react";
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
import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dto/Car.dto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { RentalPeriod as IRentalPeriod } from "../Scheduling";
import { differenceInDays } from "date-fns";
import { api } from "../../services/api";
import { Alert } from "react-native";

interface SchedulingDetailsProps {}

interface Params {
    car: CarDTO;
    dates: IRentalPeriod;
}

export function SchedulingDetails({}: SchedulingDetailsProps) {
    const theme = useTheme();

    const routes = useRoute();
    const { car, dates } = routes.params as Params;

    const days = useMemo(() => differenceInDays(new Date(dates.end), new Date(dates.start)), [dates]);

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    async function handleConfirmScheduling() {
        const { data } = await api.get(`schedules_bycars/${car.id}`);

        const unavailable_dates = [...data.unavailable_dates, ...dates.interval];

        await api.post(`schedules_byuser`, {
            car,
            user_id: 1,
        });

        api.put(`schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates,
        })
            .then(() => {
                navigation.navigate("SchedulingComplete");
            })
            .catch((err) => {
                console.log(err);
                Alert.alert("Não foi possível realizar seu aluguel");
            });
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleReturn}></BackButton>
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={car.photos}></ImageSlider>
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {car.accessories.map((accessory) => (
                        <Accessory
                            key={accessory.type}
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}></Accessory>
                    ))}
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape}></Feather>
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{dates.startFormatted}</DateValue>
                    </DateInfo>
                    <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text}></Feather>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{dates.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ {`${car.rent.price} x${days} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {`${car.rent.price * days}`}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button title="Alugar agora" onPress={handleConfirmScheduling} color={theme.colors.success}></Button>
            </Footer>
        </Container>
    );
}
