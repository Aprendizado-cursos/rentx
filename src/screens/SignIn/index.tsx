import React from "react";
import { StatusBar } from "react-native";
import { color } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";

interface SignInProps {}

export function SignIn({}: SignInProps) {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <Header>
                <Title>Estamos{"\n"}quase lá.</Title>
                <SubTitle>Faça seu login para começar{"\n"}um experiência incrível</SubTitle>
            </Header>

            <Form>
                <Input
                    iconName="mail"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <PasswordInput
                    iconName="lock"
                    placeholder="Senha"
                />
            </Form>

            <Footer>
                <Button title="Login" onPress={() => {}} disabled={true} loading={false} />
                <Button
                    light
                    title="Criar conta gratuita"
                    onPress={() => {}}
                    disabled={true}
                    loading={false}
                    color={theme.colors.background_secondary}
                />
            </Footer>
        </Container>
    );
}
