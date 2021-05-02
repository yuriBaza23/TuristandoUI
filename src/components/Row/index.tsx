import React from 'react';

import { Container } from './styles';

interface IRowProps {
    align?:  
        'flex-start' |
        'flex-end' |
        'center' |
        'space-between' |
        'space-around' |
        'space-evenly' |
        'initial' |
        'inherit';
    children: React.ReactNode
}

const Row: React.FC<IRowProps> = ({ children, align }) => {
    return(
        <Container align={align}>
            {children}
        </Container>
    );
}

export default Row;