import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { CarDTO } from "../../dto/Car.dto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
    About,
    Accessories,
    Brand,
    CarImages,
    Container,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
} from "./styles";

interface CarDetailsProps {}

interface Params {
    car: CarDTO;
}

export function CarDetails({}: CarDetailsProps) {
    const routes = useRoute();
    const theme = useTheme();
    const { car } = routes.params as Params;

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => (scrollY.value = event.contentOffset.y));

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
        };
    });

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
        };
    });

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    function handleConfirmScheduling() {
        navigation.navigate("Scheduling", { car });
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <Animated.View
                style={[headerStyleAnimation, styles.header, { backgroundColor: theme.colors.background_secondary }]}>
                <Header>
                    <BackButton onPress={handleReturn}></BackButton>
                </Header>
                <CarImages>
                    <Animated.View style={[sliderCarsStyleAnimation]}>
                        <ImageSlider imagesUrl={car.photos}></ImageSlider>
                    </Animated.View>
                </CarImages>
            </Animated.View>

            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                contentContainerStyle={{ paddingHorizontal: 24, paddingTop: getStatusBarHeight() + 160 }}
                showsVerticalScrollIndicator={false}>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>{`R$ ${car.rent.price}`}</Price>
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

                <About>
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </About>
            </Animated.ScrollView>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmScheduling}></Button>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1,
    },
});
