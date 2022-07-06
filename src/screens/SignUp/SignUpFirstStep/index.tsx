import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import * as Yup from "yup";

import { Container, Header, Steps, SubTitle, Title, Form, FormTitle } from "./styles";

interface SignUpFirstStepProps {}

export function SignUpFirstStep({}: SignUpFirstStepProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [driveLicense, setDriveLicense] = useState("");

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleNext() {
        try {
            const schema = Yup.object().shape({
                driveLicense: Yup.string().required("CNH obrigatória"),
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().email("Email inválido").required("Email obrigatório"),
            });

            const data = { name, email, driveLicense };

            await schema.validate(data);

            navigation.navigate("SignUpSecondStep", { user: data });
        } catch (error) {
            console.log(error);
            if (error instanceof Yup.ValidationError) {
                Alert.alert("Opa", error.message);
            } else {
                Alert.alert("Opa", "Erro ao realizar cadastro");
            }
        }
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
                    <Input iconName="user" placeholder="Nome" onChangeText={setName} value={name} />
                    <Input
                        iconName="mail"
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Input
                        iconName="credit-card"
                        placeholder="CNH"
                        keyboardType="numeric"
                        onChangeText={setDriveLicense}
                        value={driveLicense}
                    />
                </Form>
                <Button title="Próximo" onPress={handleNext}></Button>
            </Container>
        </KeyboardAvoidingView>
    );
}
