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
                <Accessories>
                    <Accessory name="380Km/h" icon={SpeedSvg}></Accessory>
                    <Accessory name="3.2s" icon={AccelerationSvg}></Accessory>
                    <Accessory name="800HP" icon={ForceSvg}></Accessory>
                    <Accessory name="Gasolina" icon={GasolineSvg}></Accessory>
                    <Accessory name="Auto" icon={ExchangeSvg}></Accessory>
                    <Accessory name="2 pessoas" icon={PeopleSvg}></Accessory>
                </Accessories>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de
                    Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            <Footer>
                <Button title="Confirmar" color=""></Button>
            </Footer>
        </Container>
    );
}
