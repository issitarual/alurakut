import styled from 'styled-components'; 

const Action = styled.button`
    border: 0;
    padding: 8px 12px;
    color: ${props => props.clicked? '#FFFFFF' : '#2E7BB4'}!important;
    border-radius: 10000px;
    background-color: ${props => props.clicked? '#6F92BB' : '#D9E6F6'}!important;
    margin-bottom: 10px;
    margin-right: 16px;
    @media(max-width: 1115px){
        margin-right: 10px;
    }
`;

export { Action };