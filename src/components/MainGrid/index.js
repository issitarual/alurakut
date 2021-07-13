import styled from 'styled-components';


const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 10px;
  padding: 16px;
  max-width: 500px;
  .profileArea{
      display: none;
      @media(min-width: 860px){
          display: block;
      }
  }
  @media(min-width: 860px){
    max-width: 1100px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;