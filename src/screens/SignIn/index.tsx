import { useEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import * as yup from "yup";

import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import { database } from "../../database";

interface SignInProps {}

export function SignIn({}: SignInProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const theme = useTheme();

    async function handleSign() {
        try {
            setIsLoading(true);
            const schema = yup.object().shape({
                email: yup.string().email("Digite um email válido").required("Email obrigatório"),
                password: yup.string().required("Senha é obrigatória"),
            });

            await schema.validate({ email, password });
            await signIn({ email, password });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            if (error instanceof yup.ValidationError) {
                Alert.alert("Opa", error.message);
            } else {
                Alert.alert("Opa", "Erro ao fazer login");
            }

            setIsLoading(false);
        }
    }

    function handleNewAccount() {
        navigation.navigate("SignUpFirstStep");
    }

    useEffect(() => {
        async function loadData() {
            const usersCollection = await database.get("users");
            const user = await usersCollection.query().fetch();
            console.log(user);
        }
        loadData();
    }, []);

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                            onChangeText={setEmail}
                            value={email}
                        />
                        <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button title="Login" onPress={handleSign} disabled={isLoading} loading={isLoading} />
                        <Button
                            light
                            title="Criar conta gratuita"
                            onPress={handleNewAccount}
                            color={theme.colors.background_secondary}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
