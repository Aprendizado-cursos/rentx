import React from "react";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Title, Message, Footer } from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

interface SchedulingCompleteProps {}

export function SchedulingComplete({}: SchedulingCompleteProps) {
    const { width } = useWindowDimensions();

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleReturn() {
        navigation.navigate("Home");
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"></StatusBar>
            <LogoSvg width={width}></LogoSvg>
            <Content>
                <DoneSvg width={80} height={80}></DoneSvg>
                <Title>Carro alugado!</Title>
                <Message>
                    Agora você só precisa ir{"\n"} até uma concessionário da Rentx{"\n"} pegar o seu automóvel.
                </Message>
                <Footer>
                    <ConfirmButton title="OK" onPress={handleReturn}></ConfirmButton>
                </Footer>
            </Content>
        </Container>
    );
}
