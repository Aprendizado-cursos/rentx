import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
    Section,
} from "./styles";
import { Input } from "../../components/Input";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { PasswordInput } from "../../components/PasswordInput";
import { useAuth } from "../../hooks/auth";

interface ProfileProps {}

export function Profile({}: ProfileProps) {
    const { user } = useAuth();

    const [option, setOption] = useState<"data-edit" | "password-edit">("data-edit");
    const [avatar, setAvatar] = useState(user.avatar);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);

    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.goBack();
    }

    function handleSingOut() {}

    function handleOptionChange() {
        if (option === "data-edit") {
            setOption("password-edit");
        } else {
            setOption("data-edit");
        }
    }

    async function handleSelectAvatar() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (result.cancelled) {
            return;
        }

        if (result.uri) {
            setAvatar(result.uri);
        }
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                            {!!avatar && <Photo source={{ uri: avatar }}></Photo>}
                            <PhotoButton onPress={handleSelectAvatar}>
                                <Feather name="camera" size={24} color={theme.colors.shape}></Feather>
                            </PhotoButton>
                        </PhotoContainer>
                    </Header>
                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Options>
                            <Option active={option === "data-edit"} onPress={handleOptionChange}>
                                <OptionTitle active={option === "data-edit"}>Dados</OptionTitle>
                            </Option>
                            <Option active={option === "password-edit"} onPress={handleOptionChange}>
                                <OptionTitle active={option === "password-edit"}>Trocar senha</OptionTitle>
                            </Option>
                        </Options>
                        {option === "data-edit" ? (
                            <Section>
                                <Input
                                    iconName="user"
                                    placeholder="Nome"
                                    autoCorrect={false}
                                    value={name}
                                    onChangeText={setName}></Input>
                                <Input iconName="mail" editable={false} defaultValue={email}></Input>
                                <Input
                                    iconName="credit-card"
                                    placeholder="CNH"
                                    keyboardType="numeric"
                                    value={driverLicense}
                                    onChangeText={setDriverLicense}></Input>
                            </Section>
                        ) : (
                            <Section>
                                <PasswordInput iconName="lock" placeholder="Senha atual"></PasswordInput>
                                <PasswordInput iconName="lock" placeholder="Repetir senha"></PasswordInput>
                                <PasswordInput iconName="lock" placeholder="Nova senha"></PasswordInput>
                            </Section>
                        )}
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
