import React from "react";

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from "./styles";

interface ImageSliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={true}></ImageIndex>
                <ImageIndex active={false}></ImageIndex>
                <ImageIndex active={false}></ImageIndex>
                <ImageIndex active={false}></ImageIndex>
            </ImageIndexes>
            <CarImageWrapper>
                <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain"></CarImage>
            </CarImageWrapper>
        </Container>
    );
}
