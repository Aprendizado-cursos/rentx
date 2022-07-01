import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import theme from "../../styles/theme";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: string;
    loading?: boolean;
    light?: boolean;
}

export function Button({ title, color, disabled, loading = false, light = false, ...rest }: ButtonProps) {
    return (
        <Container color={color} style={{ opacity: disabled || loading ? 0.5 : 1 }} {...rest}>
            {loading ? <ActivityIndicator color={theme.colors.shape} /> : <Title light={light}>{title}</Title>}
        </Container>
    );
}
