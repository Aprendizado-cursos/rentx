import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";

import { CarImage, CarImageWrapper, Container, ImageIndexes } from "./styles";

interface ImageSliderProps {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    });

    return (
        <Container>
            <ImageIndexes>
                {imagesUrl.map((_, index) => (
                    <Bullet key={index} active={imageIndex === index}></Bullet>
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
                onViewableItemsChanged={indexChanged.current}
            />
        </Container>
    );
}
