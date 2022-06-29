import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, Header, TotalCars, HeaderContent, CarList, MyCarsButton } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { CarDTO } from "../../dto/Car.dto";
import { Loading } from "../../components/Loading";
import { useTheme } from "styled-components";

interface HomeProps {}

export function Home({}: HomeProps) {
    const [isFetching, setIsFetching] = useState(false);
    const [cars, setCars] = useState<CarDTO[]>([]);
    const theme = useTheme();

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate("CarDetails", { car });
    }

    function handleOpenMyCars() {
        navigation.navigate("MyCars");
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                setIsFetching(true);
                const { data } = await api.get<CarDTO[]>("cars");
                setCars(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsFetching(false);
            }
        }

        fetchCars();
    }, []);

    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <Header>
                <HeaderContent>
                    <Logo height={RFValue(12)} width={RFValue(118)}></Logo>
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>
            {isFetching ? (
                <Loading></Loading>
            ) : (
                <CarList
                    data={cars}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)}></Car>}></CarList>
            )}
            <MyCarsButton onPress={() => handleOpenMyCars()}>
                <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape}></Ionicons>
            </MyCarsButton>
        </Container>
    );
}
