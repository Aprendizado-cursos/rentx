import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Container, Header, Steps, SubTitle, Title, Form, FormTitle } from "./styles";

interface SignUpFirstStepProps {}

export function SignUpFirstStep({}: SignUpFirstStepProps) {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

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
                    <FormTitle>1. Dados</FormTitle>
                    <Input iconName="user" placeholder="Nome" />
                    <Input iconName="mail" placeholder="Email" />
                    <Input iconName="credit-card" placeholder="CNH" />
                </Form>
                <Button title="Próximo"></Button>
            </Container>
        </KeyboardAvoidingView>
    );
}
