import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ color?: string }>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
`;
