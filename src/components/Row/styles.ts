import styled from 'styled-components';

interface IContainerProps {
    align?: 
        'flex-start' |
        'flex-end' |
        'center' |
        'space-between' |
        'space-around' |
        'space-evenly' |
        'initial' |
        'inherit'
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: ${props => props.align ? props.align : 'flex-start'};
    
    height: fit-content;
    width: 100%;
`;
