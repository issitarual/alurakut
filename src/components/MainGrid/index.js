import styled from 'styled-components';


const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 10px;
  padding: 16px;
  min-width: 100%;
  max-width: 500px;
  background-color: ${({theme}) => theme === true? '#22272E': null};
  .profileArea{
      display: none;
      @media(min-width: 860px){
          display: block;
      }
  }
  @media(min-width: 860px){
    max-width: 1100px;
    min-height: 100vh;
    padding-left: 10%;
    padding-right: 10%;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;