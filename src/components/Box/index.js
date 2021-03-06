import styled from 'styled-components';

const Box = styled.div`
  background: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: ${({isDark}) => isDark === true? '#ADBABD ':'#2E7BB4'};
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({isDark}) => isDark === true? '#ADBABD ':'#000'};
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({isDark}) => isDark === true? '#ADBABD ':'#000'};
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({isDark}) => isDark === true? '#ADBABD ':'#333333'};
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${({isDark}) => isDark === true? '#555f6b ':'#ECF2FA'};
  }
  input {
    width: 100%;
    background-color: ${({isDark}) => isDark === true? '#22272E':'#F4F4F4'};
    color: ${({isDark}) => isDark === true? '#ccc':'#333333'};;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: ${({isDark}) => isDark === true? '#ccc':'#333333'};
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: ${({isDark}) => isDark === true? '#ccc':'#FFF'};
    border-radius: 10000px;
    background-color: ${({isDark}) => isDark === true? '#22272E':'#6F92BB'};
  }
`; 

export default Box;