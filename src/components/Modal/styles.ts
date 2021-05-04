import styled, { keyframes } from 'styled-components';

const animationOpacityFullScreen = keyframes`
    from { opacity: 0 };
    to { opacity: 1 };
`;

const animationModalExibition = keyframes`
    from { top: -500px };
    to { top: 250px };
`;

export const Container = styled.div`
    background: rgba(0, 0, 0, .4);
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
    position: absolute;
    animation: ${animationOpacityFullScreen} .5s;
`;

export const CardModal = styled.div`
    max-width: 500px;
    min-width: 500px;
    height: 500px;

    background: #DFEAF4;
    position: absolute;

    left: calc((100vw - 500px)/2);
    top: 250px;
    animation: ${animationModalExibition} .5s;
    border-radius: 14px;
    box-sizing: border-box;

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 50px;
        border-radius: 14px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0; 

        background: #F0F8FF;

        h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: #40A798;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            right: 20px;

            font-size: 18px;
            color: #40A798;
            background: transparent;
            border: none;
            outline: none;

            cursor: pointer;
            transition: all .2s;

            &:hover {
                opacity: .7;
            }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 350px;
        box-sizing: border-box;
        overflow-y: auto;

        .turistando-checkbox {
            height: 50px;
            font-size: 20px;
            color: #40A798; 
            margin-bottom: 20px;

            input {
                margin-right: 20px;
            }
        }
    }

    footer {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 20px;
        box-sizing: border-box;

        button {
            width: fit-content;
            height: 40px;
            padding: 10px 25px;
            color: #FFF;
            background: #40A798;
            border-radius: 7px;
            outline: none;
            border: none;
            cursor: pointer;

            font-size: 16px;
            font-weight: 600;
            transition: all .2s;

            &:hover {
                background: #269081;
            }
        }
    }
`;