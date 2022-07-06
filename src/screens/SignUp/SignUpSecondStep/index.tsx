import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PasswordInput } from "../../../components/PasswordInput";

import { Container, Header, Steps, SubTitle, Title, Form, FormTitle } from "./styles";

interface SignUpSecondStepProps {}

export function SignUpSecondStep({}: SignUpSecondStepProps) {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const theme = useTheme();
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}></TouchableWithoutFeedback>
            <Container>
                <Header>
                    <BackButton onPress={handleGoBack} />
                    <Steps>
                        <Bullet active></Bullet>
                        <Bullet></Bullet>
                    </Steps>
                </Header>
                <Title>Crie sua{"\n"}conta.</Title>
                <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>
                <Form>
                    <FormTitle>2. Senha</FormTitle>
                    <PasswordInput iconName="lock" placeholder="Senha" />
                    <PasswordInput iconName="lock" placeholder="Repetir senha" />
                </Form>
                <Button title="Cadastrar" color={theme.colors.success}></Button>
            </Container>
        </KeyboardAvoidingView>
    );
}
