import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
} from "./styles";

interface CarDetailsProps {}

export function CarDetails({}: CarDetailsProps) {
    const thumb = "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png";

    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}}></BackButton>
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
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de
                    Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    );
}
