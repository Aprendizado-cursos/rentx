import React from "react";

import { Container, Title } from "./styles";

interface ConfirmButtonProps {
    title: string;
}

export function ConfirmButton({ title }: ConfirmButtonProps) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
}
