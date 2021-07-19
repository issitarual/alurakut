import styled from "styled-components";

const Container = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
    }
    div{
        height: 48px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    h2{
        font-size: 18px;
        color: ${({theme}) => theme === true? '#A3BABD': '#2E7BB4'};
        cursor: pointer;
    }
    h3{
        font-size: 15px;
        color: ${({theme}) => theme === true? '#CCCCCC': '#999999'};
    }
`;

export {Container}