import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import { api } from "../../../services/api";

import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from "./styles";

interface Params {
    user: { name: string; email: string; driveLicense: string };
}

interface SignUpSecondStepProps {}

export function SignUpSecondStep({}: SignUpSecondStepProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const { params } = useRoute();
    const theme = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }

    const { user } = params as Params;

    async function handleRegister() {
        if (!password) {
            Alert.alert("Opa", "Senha obrigatória");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Opa", "Senhas não conferem");
            return;
        }

        api.post("users", { name: user.name, email: user.email, password, driver_license: user.driveLicense })
            .then(() => {
                navigation.navigate("Confirmation", {
                    title: "Conta Criada!",
                    message: `Agora é só fazer login \ne aproveitar`,
                    nextScreenRoute: "SignIn",
                });
            })
            .catch((erro) => {
                console.log(erro);
                Alert.alert("Opa", "Erro ao criar conta");
            });
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
                    <PasswordInput iconName="lock" placeholder="Senha" onChangeText={setPassword} value={password} />
                    <PasswordInput
                        iconName="lock"
                        placeholder="Repetir senha"
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                </Form>
                <Button title="Cadastrar" color={theme.colors.success} onPress={handleRegister}></Button>
            </Container>
        </KeyboardAvoidingView>
    );
}
