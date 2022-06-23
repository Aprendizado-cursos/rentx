import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dto/Car.dto";

interface CarDetailsProps {}

interface Params {
    car: CarDTO;
}

export function CarDetails({}: CarDetailsProps) {
    const routes = useRoute();
    const { car } = routes.params as Params;

    const thumb = "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png";

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.navigate("Home");
    }

    function handleConfirmScheduling() {
        navigation.navigate("Scheduling");
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
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {car.accessories.map((accessory) => (
                        <Accessory key={accessory.type} name={accessory.name} icon={SpeedSvg}></Accessory>
                    ))}
                    <Accessory name="380Km/h" icon={SpeedSvg}></Accessory>
                    <Accessory name="3.2s" icon={AccelerationSvg}></Accessory>
                    <Accessory name="800HP" icon={ForceSvg}></Accessory>
                    <Accessory name="Gasolina" icon={GasolineSvg}></Accessory>
                    <Accessory name="Auto" icon={ExchangeSvg}></Accessory>
                    <Accessory name="2 pessoas" icon={PeopleSvg}></Accessory>
                </Accessories>

                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmScheduling}></Button>
            </Footer>
        </Container>
    );
}
