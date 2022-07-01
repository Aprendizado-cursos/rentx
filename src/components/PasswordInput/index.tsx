import React, { useState } from "react";

import { ChangePasswordVisibilityButton, Container, IconContainer, InputText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

interface PasswordInputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({ iconName, ...rest }: PasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const theme = useTheme();

    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={24} color={theme.colors.text_detail}></Feather>
            </IconContainer>

            <InputText {...rest} secureTextEntry={isPasswordVisible}></InputText>
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
