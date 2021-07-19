import styled from "styled-components";

const Container = styled.div`
    background-color: ${({theme}) => theme === true? '#444C56': '#FFFFFF'};
    width: calc(100vw - 160px - 55%);
    padding: 24px;
    border-radius: 8px;
    @media(max-width: 860px){
        width: 100%;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 28px;
        margin-bottom: 8px;
        color: ${({theme}) => theme === true? '#ADBABD': '#2E7BB4'};
    }
    button{
        padding: 9px 12px;
        background-color: ${({theme}) => theme === true? '#22272E': '#6F92BB'};
        border-radius: 8px;
        border: none;
        color: ${({theme}) => theme === true? '#CCCCCC': '#FFFFFF'};
        font-size: 12px;
        margin-bottom: 24px;
    }
`;

const Path= styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-bottom: 24px;
`;

const Pages = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme === true? '#ccc': '#000'};
    div{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }
`

export {Container, Path, Pages}