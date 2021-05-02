import styled from 'styled-components';
import background from '../../assets/background.png';

interface IContainerProps {
    page: 'home' | string;
}

export const Container = styled.div<IContainerProps>`
    width: 100%;
    height: ${props => (props.page === 'home') ? 40 : 10}vh;
    
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    padding: 25px 50px;

    box-sizing: border-box;
    position: relative;
`;

export const Logo = styled.img`
    height: 70px;
    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: .7;
    }
`;
