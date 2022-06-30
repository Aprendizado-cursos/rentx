import React from "react";
import { FlatList } from "react-native";

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from "./styles";

interface ImageSliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
    return (
        <Container>
            <ImageIndexes>
                {imagesUrl.map((_, index) => (
                    <ImageIndex key={index} active={true}></ImageIndex>
                ))}
            </ImageIndexes>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={imagesUrl}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage source={{ uri: item }} resizeMode="contain"></CarImage>
                    </CarImageWrapper>
                )}
            />
        </Container>
    );
}
