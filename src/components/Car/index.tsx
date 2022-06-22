import React from "react";
import { TouchableOpacityProps } from "react-native";
import GasolineSvg from "../../assets/gasoline.svg";

import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from "./styles";

interface CarProps extends TouchableOpacityProps {
    brand: string;
    name: string;
    rent: {
        price: number;
        period: string;
    };
    thumbnail: string;
}

export function Car({ brand, name, rent, thumbnail, ...rest }: CarProps) {
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
                        <GasolineSvg></GasolineSvg>
                    </Type>
                </About>
            </Details>

            <CarImage source={{ uri: thumbnail }} resizeMode="contain"></CarImage>
        </Container>
    );
}
