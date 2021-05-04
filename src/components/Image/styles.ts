import styled from 'styled-components';

interface IContainerProps {
    src: string;
}

export const Container = styled.div<IContainerProps>`
    min-width: 40vh;
    height: 40vh;

    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 25px;
    margin-right: 25px;

    position: relative;
    cursor: pointer;
    box-sizing: border-box;

    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        min-width: 40vh;
        height: 40vh;
        position: absolute;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.27) 0%, rgba(0, 0, 0, 0.162) 43.59%, rgba(0, 0, 0, 0) 57.92%);
    
        .data {  
            display: flex;
            flex-direction: column;
            min-width: 30vh;
            height: 80%;

            align-items: baseline;
            justify-content: flex-end;

            h1 {
                color: #FFFFFF;
                text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.5);
            }

            div {
                display: flex;
                align-items: center;
                color: #FFFFFF;

                span {
                    font-size: 18px;
                    font-weight: 300;
                    margin-left: 10px;
                }
            }
        }
    }

    transition: .2s;

    &:hover {
        opacity: .9;
    }
`;
