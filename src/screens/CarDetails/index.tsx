import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
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
    Content,
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
    const { car } = routes.params as Params;

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    function handleConfirmScheduling() {
        navigation.navigate("Scheduling", { car });
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
                        <Accessory
                            key={accessory.type}
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}></Accessory>
                    ))}
                </Accessories>

                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmScheduling}></Button>
            </Footer>
        </Container>
    );
}
