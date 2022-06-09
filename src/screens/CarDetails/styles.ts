import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight(true) + 18}px;
    margin-left: 24px;
    position: absolute;
`;

export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight(true) + 32}px;
`;
