import React from "react";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Title, Message, Footer } from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";
import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";

interface ParamsProps {
    title: string;
    message: string;
    nextScreenRoute?: string;
}

export function Confirmation() {
    const { width } = useWindowDimensions();
    const { params } = useRoute();
    const { message, title, nextScreenRoute = "home" } = params as ParamsProps;

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.navigate(nextScreenRoute);
    }
    //Carro alugado!
    //Agora você só precisa ir{"\n"} até uma concessionário da Rentx{"\n"} pegar o seu automóvel.
    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <LogoSvg width={width}></LogoSvg>
            <Content>
                <DoneSvg width={80} height={80}></DoneSvg>
                <Title>{title}</Title>
                <Message>{message}</Message>
                <Footer>
                    <ConfirmButton title="OK" onPress={handleReturn}></ConfirmButton>
                </Footer>
            </Content>
        </Container>
    );
}
