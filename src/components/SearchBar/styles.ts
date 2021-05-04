import styled from 'styled-components';

export const Main = styled.div`
    width: 55%;

    position: absolute;
    bottom: -92.5px;
    right: 22.5%;

    .text-turistando {
        display: flex;
        width: 100%;

        h1 {
            font-size: 40px;
            color: #FFF;
            width: 75%;

            font-weight: 700;
            line-height: 56px;

            text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.5);
        }
    }

    .search-tags {
        margin-top: 25px;

        span {
            color: rgba(0, 0, 0, .45);
            font-weight: 600;
        }

        .link-button {
            margin-left: 5px;
            background: transparent;

            border: none;
            outline: none;
            cursor: pointer;
            transition: opacity .4s;

            color: #808080;
            text-decoration: underline;
            font-weight: 300;

            &:hover {
                opacity: .7;
            }
        }
    }

    @media(max-width: 1250px) {
        width: 70%;
        right: 15%;
    }

    @media(max-width: 500px) {
        width: 95%;
        right: 2.5%;
    }
`;

export const Container = styled.div`
    display: flex;

    width: 100%;
    min-height: 75px;

    background: #FFF;

    border-radius: 20px;
    box-shadow: 0px 62px 40px -42px #DFEAF4;

    div {
        display: flex;
        align-items: center;

        width: 40%;
        min-height: 75px;
        padding: 10px;
    }

    .div_city, .div_state {
        padding-left: 25px;
    }

    .div_city {
        border-left: 1px solid rgba(0, 0, 0, 0.08);
    }

    .div_search {
        width: 20%;
    }

    .div_city, .div_state svg {
        font-size: 20px;
        color: rgba(0, 0, 0, .36);
    }

    .select-button {
        width: 100%;
        min-height: 75px;
        justify-content: flex-start;

        background: transparent;
        border-radius: 0;
        color: rgba(0, 0, 0, .36);

        font-size: 17px;
        font-weight: 400;

        padding-left: 20px;

        border: none;
        outline: none;
        cursor: pointer;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        min-height: 75px;
    
        background: #40A798;
        color: #FFF;

        font-size: 17px;
        font-weight: 700;

        border: none;
        outline: none;
        cursor: pointer;
        transition: background .4s;

        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

        &:hover {
            background: #269081;
        }
    }
`;
