import React from "react";
import { TouchableOpacityProps } from "react-native";
import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../dto/Car.dto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from "./styles";

interface CarProps extends TouchableOpacityProps {
    data: CarDTO;
}

export function Car({ data: { brand, name, rent, thumbnail, fuel_type }, ...rest }: CarProps) {
    const MotorIcon = getAccessoryIcon(fuel_type);

    return (
        <Container {...rest}>
            <Details>
                <Brand>{brand}</Brand>
                <Name>{name}</Name>
                <About>
                    <Rent>
                        <Period>{rent.period}</Period>
                        <Price>R$ {rent.price}</Price>
                    </Rent>
                    <Type>
                        <MotorIcon></MotorIcon>
                    </Type>
                </About>
            </Details>

            <CarImage source={{ uri: thumbnail }} resizeMode="contain"></CarImage>
        </Container>
    );
}
