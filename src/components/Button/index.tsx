import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: string;
}

export function Button({ title, color, disabled, ...rest }: ButtonProps) {
    return (
        <Container color={color} disabled={disabled} style={{ opacity: disabled ? 0.5 : 1 }} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
