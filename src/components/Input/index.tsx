import React from "react";

import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ iconName, ...rest }: InputProps) {
    const theme = useTheme();

    return (
        <Container>
            <Feather name={iconName} size={24} color={theme.colors.text_detail}></Feather>
        </Container>
    );
}
