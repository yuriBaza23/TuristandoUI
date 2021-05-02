import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 15px 35px;
    border-radius: 20px;

    background: #40A798;
    color: #FFF;

    border: none;
    outline: none;
    cursor: pointer;
    transition: background .4s;

    &:hover {
        background: #269081;
    }
`;
