import React, { useEffect, useState } from "react";

import { Container, IconContainer, InputText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ iconName, value, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setIsFilled(!!value);
    }, [value]);

    return (
        <Container >
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}></Feather>
            </IconContainer>

            <InputText isFocused={isFocused} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} {...rest}></InputText>
        </Container>
    );
}
