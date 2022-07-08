import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import Feather from "@expo/vector-icons/Feather";

import { Container, Header, HeaderTop, HeaderTitle, LogoutButton, PhotoContainer, Photo, PhotoButton } from "./styles";

interface ProfileProps {}

export function Profile({}: ProfileProps) {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    function handleSingOut() {}

    return (
        <Container>
            <Header>
                <HeaderTop>
                    <BackButton color={theme.colors.shape} onPress={handleReturn}></BackButton>
                    <HeaderTitle>Editar perfil</HeaderTitle>
                    <LogoutButton onPress={handleSingOut}>
                        <Feather name="power" size={24} color={theme.colors.shape}></Feather>
                    </LogoutButton>
                </HeaderTop>
                <PhotoContainer>
                    <Photo source={{ uri: "https://avatars.githubusercontent.com/u/39427966?v=4" }}></Photo>
                    <PhotoButton onPress={() => {}}>
                        <Feather name="camera" size={24} color={theme.colors.shape}></Feather>
                    </PhotoButton>
                </PhotoContainer>
            </Header>
        </Container>
    );
}
