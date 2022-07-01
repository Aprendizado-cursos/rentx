import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { LoadAnimation } from "../../components/LoadAnimation";
import { CarDTO } from "../../dto/Car.dto";
import { api } from "../../services/api";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

interface HomeProps {}

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function Home({}: HomeProps) {
    const [isFetching, setIsFetching] = useState(false);
    const [cars, setCars] = useState<CarDTO[]>([]);
    const theme = useTheme();

    const positionY = useSharedValue(0);
    const positionX = useSharedValue(0);

    const myCardButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
        };
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, context: any) {
            context.positionX = positionX.value;
            context.positionY = positionY.value;
        },
        onActive(event, context) {
            positionX.value = context.positionX + event.translationX;
            positionY.value = context.positionY + event.translationY;
        },
        onEnd() {
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        },
    });

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

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true;
        });
    }, []);

    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <Header>
                <HeaderContent>
                    <Logo height={RFValue(12)} width={RFValue(118)}></Logo>
                    {!isFetching && <TotalCars>{`Total de ${cars.length} carros`}</TotalCars>}
                </HeaderContent>
            </Header>
            {isFetching ? (
                <LoadAnimation />
            ) : (
                <CarList
                    data={cars}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)}></Car>}></CarList>
            )}
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[myCardButtonStyle, { position: "absolute", bottom: 13, right: 22 }]}>
                    <ButtonAnimated
                        onPress={() => handleOpenMyCars()}
                        style={[styles.button, { backgroundColor: theme.colors.main }]}>
                        <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape}></Ionicons>
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
});
