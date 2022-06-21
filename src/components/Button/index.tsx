import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    color?: string;
    // onPress?:()=>void
}

export function Button({ title, color, ...rest }: ButtonProps) {
    return (
        <Container color={color} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
