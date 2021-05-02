import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
  }

const Button: React.FC<IButtonProps> = ({ text }) => {
    return(
        <Container>
            {text}
        </Container>
    );
}

export default Button;