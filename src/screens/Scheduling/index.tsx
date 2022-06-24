import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";

import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { Alert, StatusBar } from "react-native";
import { CalendarProps } from "react-native-calendars";
import { Button } from "../../components/Button";
import { Calendar, DayProps } from "../../components/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from "./styles";
import { CarDTO } from "../../dto/Car.dto";

interface SchedulingProps {}

export interface RentalPeriod {
    start: number;
    startFormatted: string;
    end: number;
    endFormatted: string;
    interval: string[];
}

interface Params {
    car: CarDTO;
}

export function Scheduling({}: SchedulingProps) {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<CalendarProps["markedDates"]>({} as CalendarProps["markedDates"]);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
    const theme = useTheme();

    const routes = useRoute();
    const { car } = routes.params as Params;

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    function handleConfirmScheduling() {
        if (!rentalPeriod.start || !rentalPeriod.end) {
            Alert.alert("Selecione o intervalo para alugar.");
        } else {
            navigation.navigate("SchedulingDetails", { car, dates: rentalPeriod });
        }
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            start: start.timestamp,
            end: end.timestamp,
            startFormatted: format(getPlatformDate(new Date(firstDate)), "dd/MM/yyyy"),
            endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
            interval: Object.keys(interval),
        });
    }

    return (
        <Container>
            <Header>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
                <BackButton onPress={handleReturn} color={theme.colors.shape}></BackButton>
                <Title>
                    Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>
                    <ArrowSvg></ArrowSvg>
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar markedDates={markedDates} onDayPress={handleChangeDate}></Calendar>
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmScheduling}></Button>
            </Footer>
        </Container>
    );
}
