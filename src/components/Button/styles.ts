import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ color?: string }>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color, theme }) => (color ? color : theme.colors.main)};
    margin-bottom: 8px;
`;
export const Title = styled.Text<{ light?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme, light }) => (light ? theme.colors.header : theme.colors.background_secondary)};
    font-size: ${RFValue(15)}px;
`;
