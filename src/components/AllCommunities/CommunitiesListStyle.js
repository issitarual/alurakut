import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
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
    }
    button{
        padding: 9px 12px;
        background-color: #6F92BB;
        border-radius: 8px;
        border: none;
        color: #fff;
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
    div{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }
`

export {Container, Path, Pages}