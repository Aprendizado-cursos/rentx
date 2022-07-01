import React, { useEffect, useState } from "react";

import { ChangePasswordVisibilityButton, Container, IconContainer, InputText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

interface PasswordInputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({ iconName, value, ...rest }: PasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setIsFilled(!!value);
    }, [value]);

    return (
        <Container isFocused={isFocused}>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}></Feather>
            </IconContainer>

            <InputText
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
                secureTextEntry={isPasswordVisible}></InputText>
            <IconContainer>
                <ChangePasswordVisibilityButton onPress={() => setIsPasswordVisible((state) => !state)}>
                    <Feather
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={24}
                        color={theme.colors.text_detail}></Feather>
                </ChangePasswordVisibilityButton>
            </IconContainer>
        </Container>
    );
}
