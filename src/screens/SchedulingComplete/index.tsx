import React from "react";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Title, Message, Footer } from "./styles";
import { useWindowDimensions } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";

interface SchedulingCompleteProps {}

export function SchedulingComplete({}: SchedulingCompleteProps) {
    const { width } = useWindowDimensions();

    return (
        <Container>
            <LogoSvg width={width}></LogoSvg>
            <Content>
                <DoneSvg width={80} height={80}></DoneSvg>
                <Title>Carro alugado!</Title>
                <Message>
                    Agora você só precisa ir{"\n"} até uma concessionário da Rentx{"\n"} pegar o seu automóvel.
                </Message>
                <Footer>
                    <ConfirmButton title="OK"></ConfirmButton>
                </Footer>
            </Content>
        </Container>
    );
}
