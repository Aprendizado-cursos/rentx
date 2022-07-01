import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";

import { Container, Header, Steps, SubTitle, Title,Form ,FormTitle} from "./styles";

interface SignUpFirstStepProps {}

export function SignUpFirstStep({}: SignUpFirstStepProps) {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
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
            </Form>
        </Container>
    );
}
