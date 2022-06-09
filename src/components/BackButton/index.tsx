import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Container } from "./styles";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface BackButtonProps extends TouchableOpacityProps {
    color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
    const theme = useTheme();

    return (
        <Container>
            <MaterialIcons name="chevron-left" size={24} color={color ? color : theme.colors.text} {...rest}></MaterialIcons>
        </Container>
    );
}
