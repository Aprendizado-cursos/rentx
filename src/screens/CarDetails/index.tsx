import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./styles";

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
        </Container>
    );
}
